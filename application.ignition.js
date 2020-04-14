console.warn(`
    "keys_varify":             credentials used to start up the application
    "keys_start":              bootstraps application, waits to mount application variables somewhere
    "keys_idle":               live application, possibly awaiting inputs
    "keys_freeze":             immediately pauses all executions
    "keys_stop_safely":        safely shutsdown application
    "keys_stop_immediately":   (NOT SAFE, EMERGENCIES ONLY) immediate shutdown
    "keys_reset_safely":       restarts application safely
    "keys_reset_immediately":  (NOT SAFE, EMERGENCIES ONLY) immediate reset

    "throttle_accelerate":     incrementally speeds up application speed
    "throttle_decelerate":     decrementally slows down application speed
    "throttle_slowest":        slowest speed application allows
    "throttle_half":           half application speed allowed
    "throttle_fastest":        fastest speed application allows
`);


module.exports = function claS_Ignition(obj) {
    return {
         // captains chair, drivers seat
        keys_verify:                   Function,
        keys_start:                    Function, 
        keys_idle:                     Function,
        keys_freeze:                   Function, 
        keys_stop_safely:              Function,
        keys_stop_immediately:         Function,   
        keys_reset_safely:             Function,
        keys_reset_immediately:        Function,
        
        throttle_accelerate:           Function,
        throttle_decelerate:           Function,
        throttle_slowest:              Function,
        throttle_half:                 Function,
        throttle_fastest:              Function,
    }
};
