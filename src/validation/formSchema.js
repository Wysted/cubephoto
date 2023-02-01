import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required("El nombre es requerido").min(3, "El nombre debe tener al menos 3 caracteres"),
    title: yup.string().required("El titulo es requerido").min(3, "El titulo debe tener al menos 3 caracteres").max(100, "El titulo no debe pasar de los 100 caracteres"),
    x: yup.number()
        .required()
        .typeError("La cordenada X es requerida"),

    y: yup.number("Debe ser un entero")

        .required()
        .typeError("La cordenada Y es requerida"),

    z: yup.number("Debe ser un numero")
        .required()
        .nullable()
        .typeError("La cordenada Z es requerida"),
    description: yup.string()
        .optional()
        
        .max(500, "La titulo no debe pasar de los 500 caracteres"),
    image: yup.mixed()
        .required("La imagen es requerida")
        
        .test("FILE_TYPE","Tipo de archivo invalido, debe ser jpg,png o jpeg",(value) => value && ['image/png', 'image/jpeg','image/jpg'].includes(value.type))

});

export default formSchema;