import { useLocation } from 'react-router';

export default function SubscribePlan() {
    console.log(useLocation().state);
    return null;
}
