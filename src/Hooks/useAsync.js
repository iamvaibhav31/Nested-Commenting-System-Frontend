import { useEffect, useState, useCallback } from 'react';

export function useAsync(func, dependencies = []) {
     const { executer, ...state } = useAsyncInternal(func, dependencies, true);

     useEffect(() => {
          executer()
     }, [executer])

     return state
}


export function useInvocasync(func, dependencies = []) {
     return useAsyncInternal(func, dependencies, false)
}

export function useAsyncInternal(func, dependencies = [], initialLoadiing = false) {
     const [loading, setLoading] = useState(initialLoadiing)
     const [error, setError] = useState()
     const [value, setValue] = useState()


     const executer = useCallback((...params) => {
          setLoading(true)
          return func(...params).then(data => {
               setValue(data)
               setError(undefined)
               return data
          }).catch(err => {
               setValue(undefined)
               setError(err)
               return Promise.reject(err)
          }).finally(() => {
               setLoading(false)
          })

     }, dependencies)

     return { loading, error, value, executer }

}
