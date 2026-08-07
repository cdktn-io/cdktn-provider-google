# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-google.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### GoogleProviderFunctions <a name="GoogleProviderFunctions" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions"></a>

Provider-defined functions of the google provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.Initializer"></a>

```python
from cdktn_provider_google import provider_functions

providerFunctions.GoogleProviderFunctions(
  provider_local_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.Initializer.parameter.providerLocalName">provider_local_name</a></code> | <code>str</code> | The local name of the provider in required_providers; |

---

##### `provider_local_name`<sup>Required</sup> <a name="provider_local_name" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* str

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.locationFromId">location_from_id</a></code> | Takes a single string argument, which should be a resource id, self link, or OP style resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.nameFromId">name_from_id</a></code> | Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.projectFromId">project_from_id</a></code> | Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromId">region_from_id</a></code> | Takes a single string argument, which should be a resource id, self link, or OP style resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromZone">region_from_zone</a></code> | Takes a single string argument, which should be a resource's zone. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.zoneFromId">zone_from_id</a></code> | Takes a single string argument, which should be an id or self link of a resource. |

---

##### `location_from_id` <a name="location_from_id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.locationFromId"></a>

```python
def location_from_id(
  id: str
) -> str
```

Takes a single string argument, which should be a resource id, self link, or OP style resource name.

This function will either return the location name from the input string or raise an error due to no location being present in the string. The function uses the presence of "locations/{{location}}/" in the input string to identify the location name, e.g. when the function is passed the id "projects/my-project/locations/us-central1/services/my-service" as an argument it will return "us-central1".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.locationFromId.parameter.id"></a>

- *Type:* str

A string of a resource's id, a resource's self link, or an OP style resource name.

For example, "projects/my-project/locations/us-central1/services/my-service" and "https://run.googleapis.com/v2/projects/my-project/locations/us-central1/services/my-service" are valid values containing locations

---

##### `name_from_id` <a name="name_from_id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.nameFromId"></a>

```python
def name_from_id(
  id: str
) -> str
```

Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name.

This function will return the short-form name of a resource from the input string, or raise an error due to a problem with the input string. The function returns the final element in the input string as the resource's name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-instance".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.nameFromId.parameter.id"></a>

- *Type:* str

A string of a resource's id, resource URI, self link, or full resource name.

For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values

---

##### `project_from_id` <a name="project_from_id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.projectFromId"></a>

```python
def project_from_id(
  id: str
) -> str
```

Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name.

This function will either return the project name from the input string or raise an error due to no project being present in the string. The function uses the presence of "projects/{{project}}/" in the input string to identify the project name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-project".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.projectFromId.parameter.id"></a>

- *Type:* str

A string of a resource's id, resource URI, self link, or full resource name.

For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values

---

##### `region_from_id` <a name="region_from_id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromId"></a>

```python
def region_from_id(
  id: str
) -> str
```

Takes a single string argument, which should be a resource id, self link, or OP style resource name.

This function will either return the region name from the input string or raise an error due to no region being present in the string. The function uses the presence of "regions/{{region}}/" in the input string to identify the region name, e.g. when the function is passed the id "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" as an argument it will return "us-central1".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromId.parameter.id"></a>

- *Type:* str

A string of a resource's id, a resource's self link, or an OP style resource name.

For example, "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" and "https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/subnetworks/my-subnetwork" are valid values containing regions

---

##### `region_from_zone` <a name="region_from_zone" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromZone"></a>

```python
def region_from_zone(
  zone: str
) -> str
```

Takes a single string argument, which should be a resource's zone.

###### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromZone.parameter.zone"></a>

- *Type:* str

A string of a resource's zone.

---

##### `zone_from_id` <a name="zone_from_id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.zoneFromId"></a>

```python
def zone_from_id(
  id: str
) -> str
```

Takes a single string argument, which should be an id or self link of a resource.

This function will either return the zone name from the input string or raise an error due to no zone being present in the string. The function uses the presence of "zones/{{zone}}/" in the input string to identify the zone name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "us-central1-c".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.zoneFromId.parameter.id"></a>

- *Type:* str

An id of a resource, or a self link.

For example, both "projects/my-project/zones/us-central1-c/instances/my-instance" and "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" are valid inputs

---





