
// Maneja rutas indefinidas
export const undefinedRoute = (req, res, next) => {
    if(res.status(404)){
        return res.status(404).json({
            error: 'Not Found',
            message: `La ruta ${req.method}${req.path} no fue encontrada`,
            method: req.method
        });
    }
    next()
};