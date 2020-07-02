export const fetchUser = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
);

export const editUser = (formData, userId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
);