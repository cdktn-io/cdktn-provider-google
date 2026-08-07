# `providerFunctions` Submodule <a name="`providerFunctions` Submodule" id="@cdktn/provider-google.providerFunctions"></a>



## Classes <a name="Classes" id="Classes"></a>

### GoogleProviderFunctions <a name="GoogleProviderFunctions" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions"></a>

Provider-defined functions of the google provider.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.Initializer"></a>

```typescript
import { providerFunctions } from '@cdktn/provider-google'

new providerFunctions.GoogleProviderFunctions(providerLocalName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.Initializer.parameter.providerLocalName">providerLocalName</a></code> | <code>string</code> | The local name of the provider in required_providers; |

---

##### `providerLocalName`<sup>Required</sup> <a name="providerLocalName" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.Initializer.parameter.providerLocalName"></a>

- *Type:* string

The local name of the provider in required_providers;

defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.locationFromId">locationFromId</a></code> | Takes a single string argument, which should be a resource id, self link, or OP style resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.nameFromId">nameFromId</a></code> | Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.projectFromId">projectFromId</a></code> | Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromId">regionFromId</a></code> | Takes a single string argument, which should be a resource id, self link, or OP style resource name. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromZone">regionFromZone</a></code> | Takes a single string argument, which should be a resource's zone. |
| <code><a href="#@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.zoneFromId">zoneFromId</a></code> | Takes a single string argument, which should be an id or self link of a resource. |

---

##### `locationFromId` <a name="locationFromId" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.locationFromId"></a>

```typescript
public locationFromId(id: string): string
```

Takes a single string argument, which should be a resource id, self link, or OP style resource name.

This function will either return the location name from the input string or raise an error due to no location being present in the string. The function uses the presence of "locations/{{location}}/" in the input string to identify the location name, e.g. when the function is passed the id "projects/my-project/locations/us-central1/services/my-service" as an argument it will return "us-central1".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.locationFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, a resource's self link, or an OP style resource name.

For example, "projects/my-project/locations/us-central1/services/my-service" and "https://run.googleapis.com/v2/projects/my-project/locations/us-central1/services/my-service" are valid values containing locations

---

##### `nameFromId` <a name="nameFromId" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.nameFromId"></a>

```typescript
public nameFromId(id: string): string
```

Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name.

This function will return the short-form name of a resource from the input string, or raise an error due to a problem with the input string. The function returns the final element in the input string as the resource's name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-instance".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.nameFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, resource URI, self link, or full resource name.

For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values

---

##### `projectFromId` <a name="projectFromId" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.projectFromId"></a>

```typescript
public projectFromId(id: string): string
```

Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name.

This function will either return the project name from the input string or raise an error due to no project being present in the string. The function uses the presence of "projects/{{project}}/" in the input string to identify the project name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-project".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.projectFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, resource URI, self link, or full resource name.

For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values

---

##### `regionFromId` <a name="regionFromId" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromId"></a>

```typescript
public regionFromId(id: string): string
```

Takes a single string argument, which should be a resource id, self link, or OP style resource name.

This function will either return the region name from the input string or raise an error due to no region being present in the string. The function uses the presence of "regions/{{region}}/" in the input string to identify the region name, e.g. when the function is passed the id "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" as an argument it will return "us-central1".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromId.parameter.id"></a>

- *Type:* string

A string of a resource's id, a resource's self link, or an OP style resource name.

For example, "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" and "https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/subnetworks/my-subnetwork" are valid values containing regions

---

##### `regionFromZone` <a name="regionFromZone" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromZone"></a>

```typescript
public regionFromZone(zone: string): string
```

Takes a single string argument, which should be a resource's zone.

###### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.regionFromZone.parameter.zone"></a>

- *Type:* string

A string of a resource's zone.

---

##### `zoneFromId` <a name="zoneFromId" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.zoneFromId"></a>

```typescript
public zoneFromId(id: string): string
```

Takes a single string argument, which should be an id or self link of a resource.

This function will either return the zone name from the input string or raise an error due to no zone being present in the string. The function uses the presence of "zones/{{zone}}/" in the input string to identify the zone name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "us-central1-c".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.providerFunctions.GoogleProviderFunctions.zoneFromId.parameter.id"></a>

- *Type:* string

An id of a resource, or a self link.

For example, both "projects/my-project/zones/us-central1-c/instances/my-instance" and "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" are valid inputs

---





