import * as Yup from "yup";

export const formEditOrgSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    shortDescription: Yup.string().required(
        "La descripción corta es obligatorio"
    ),
    longDescription: Yup.string().required(
        "La descripción larga es obligatorio"
    ),
    logo: Yup.string().required("El logo es obligatorio"),
    facebookLink: Yup.string()
        .url("Url invalida")
        .required("Este campo es obligatorio"),
    instagramLink: Yup.string()
        .url("Url invalida")
        .required("Este campo es obligatorio"),
})