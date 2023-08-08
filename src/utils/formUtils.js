const handleFieldError = (fieldRef, fieldName, message, setError) => {
    fieldRef.current.focus()
    setError(fieldName, {
        type: "manual",
        message: message,
    })
}

export { handleFieldError }
