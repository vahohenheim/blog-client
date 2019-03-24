const method = 'GET'
const path = '/api/articles'

module.exports = {
  method: method,
  path: path,
  middleware: (req, res) => {
    if (req.method === method && req.path === path) {
      res.status(200).json({
        '@context': '/api/contexts/Articles',
        '@id': '/api/articles/1',
        '@type': 'Article',
        docInsurance: null,
        docTransportAttestation: null,
        firstname: 'string',
        lastname: 'string',
        email: req.body.email,
        phoneNumber: '0202020202',
        managedCompany: {
          '@id': '/api/companies/1',
          '@type': 'Company',
          name: 'string',
          vatIdentificationNumber: 'string',
          streetAddress: 'string',
          additionalAddress: 'string',
          postalCode: 'string',
          city: 'string',
          country: 'string',
        },
        docKbisExtract: null,
      })
    }
  },
}
