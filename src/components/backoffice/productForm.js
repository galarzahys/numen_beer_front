import { useFormik, FormikProvider, Form, Field, ErrorMessage, } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { getReq, postReq, putReq } from '../../helpers/ReqToApi';

const ProductsForm = (props) => {

    const [ productDetail, setProductDetail] = useState(null);
    const {id} = useParams();
    const [ image, setImage ] = useState(null)
    const navigate = useNavigate()

    const getData = async () => {
        const {data} = await getReq('/products/' + id);
        setProductDetail(data);
    };

    useEffect(() => {
        getData();
    }, [])


    var data = {
        name: '',
        packaging: '',
        category: '',
        stock: '',
        price: '',
        description: '',
        type: 'POST',
    }

    if (productDetail){
        data = {
            id: productDetail.id,
            name: productDetail.name,
            packaging: productDetail.packaging,
            category: productDetail.category,
            stock: productDetail.stock,
            price: productDetail.price,
            description: productDetail.description,
            type: 'PUT',
        }
    }

    const ProductValidationSchema = Yup.object().shape({
        name: Yup.string().required('*Requerido'),
        category: Yup.string().required('*Requerido'),
        packaging: Yup.string().required('*Requerido'),
        stock: Yup.number().required('*Requerido'),
        price: Yup.number().required('*Requerido'),
        description: Yup.string().required('*Requerido'),
      })

    const handleSubmit = async (values, {setSubmitting}) => {
        const data_im = new FormData();
        data_im.append('image', image);
        data_im.append('name', values.name);
        data_im.append('packaging', values.packaging);
        data_im.append('category', values.category);
        data_im.append('stock', values.stock);
        data_im.append('price', values.price);
        data_im.append('description', values.description);
        values.type === 'POST'
        ? postReq('/products', data_im)
        : putReq('/products/' + productDetail.id, data_im)
        setSubmitting(false)
        navigate('/backoffice/setproduct')
        window.location.reload()
    }
    
    const formik = useFormik({enableReinitialize:true, initialValues: data, validationSchema: ProductValidationSchema, onSubmit: handleSubmit});
    
    return (
        <>
        <section className="newsFormContainer">
            <h1>{data.type === 'POST' ? 'Agregar nuevo producto' : 'Actualizar producto'}</h1>
            <FormikProvider value={formik}>
                <Form className="news-form">
                    <Field placeholder='nombre' name="name" className="news-field"/> 
                    <ErrorMessage name='name'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field placeholder='Presentación' name="packaging" className="news-field"/> 
                    <ErrorMessage name='packaging'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field placeholder='Categoria' name="category" className="news-field"/> 
                    <ErrorMessage name='category'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field placeholder='Stock Disponible' name="stock" className="news-field"/> 
                    <ErrorMessage name='stock'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field placeholder='Precio' name="price" className="news-field"/> 
                    <ErrorMessage name='price'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field as='textarea' name="description" className="news-field" placeholder='Descripción'/>
                    <ErrorMessage name='description'>{msg => <span className="error">{msg}</span>}</ErrorMessage>

                    <Field type="file" name="image" className="news-field" onChange={(e)=>setImage(e.target.files[0])} /> 
                    <ErrorMessage name='image'>{msg => <span className="error">{msg}</span>}</ErrorMessage>


                    <button type="submit" disabled={formik.isSubmitting} className="button-primary">Enviar</button>
                </Form>
            </FormikProvider>
        </section>
        </>
    )
}

export default ProductsForm
