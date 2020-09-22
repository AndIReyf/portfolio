import React from "react";
import {TextField} from "@material-ui/core";

type PropsType = {
    label: string
    variant: VariantsType
    multiline?: boolean
    value: string
    error?: boolean
    textError?: string
    helperText?: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}
type VariantsType = "standard" | "outlined" | "filled" | undefined

export function Input(props: PropsType) {
    //@ts-ignore
    return <TextField
        helperText={props.error && props.helperText}
        error={props.error}
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
        multiline={props.multiline}
        label={props.error ? props.textError : props.label}
        variant={props.variant}
    />
}