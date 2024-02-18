import { useQuery } from '@tanstack/react-query';
import { IUniversity } from '../models/universities';
import { getUniversities } from '../services/apiCalls';

const QUERY_UNIVERSITIES = 'universities';

export const useUniversities = (filterBy: string) => {
    return useQuery<IUniversity[]>({
        queryKey: [QUERY_UNIVERSITIES, filterBy],
        queryFn: () => getUniversities(filterBy),
    })
};
