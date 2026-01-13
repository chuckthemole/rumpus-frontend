import React from 'react';
import { LOGGER, PersonalPageEditor } from '@rumpushub/common-react';

export default function EditPersonalPage() {
    const handleSuccess = (data) => {
        LOGGER.debug('Personal page updated!', data);
    };

    return (
        <div className="container">
            <h1 className="title">Edit Personal Page</h1>
            <PersonalPageEditor
                endpoint="/api/personal-page"
                onSuccess={handleSuccess}

                // TODO: we're not using this right now. Do we want this to be a param?
                fields={[
                    {
                        name: 'name',
                        label: 'Name',
                        type: 'text',
                        placeholder: 'Your full name'
                    },
                    {
                        name: 'tagline',
                        label: 'Tagline',
                        type: 'text',
                        placeholder: 'A short tagline or motto'
                    },
                    {
                        name: 'aboutMe',
                        label: 'About Me',
                        type: 'rich_text'
                    },
                    {
                        name: 'profileImage',
                        label: 'Profile Image URL',
                        type: 'text',
                        placeholder: 'https://example.com/profile.jpg'
                    },
                    {
                        name: 'portfolioLinks',
                        label: 'Portfolio Links',
                        type: 'textarea',
                        placeholder: 'One link per line'
                    },
                    {
                        name: 'contactEmail',
                        label: 'Contact Email',
                        type: 'email',
                        placeholder: 'you@example.com'
                    }
                ]}
            />
        </div>
    );
}
