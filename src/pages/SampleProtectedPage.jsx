import ProtectedLayout from '../components/layouts/ProtectedLayout.jsx';

export default function SampleProtectedPage() {
    return (
        <ProtectedLayout>
            <div><h1>Sample Protected Page</h1></div>
        </ProtectedLayout>
    )
}