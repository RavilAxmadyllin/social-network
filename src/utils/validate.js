export const required = value => {
    if (value) return undefined
    else return  'Field is required'
}

export const maxLength = max => value =>
    value && value.length > max ? `Max simbols ${max} ` : undefined