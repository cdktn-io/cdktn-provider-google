# `networkConnectivityRegionalEndpoint` Submodule <a name="`networkConnectivityRegionalEndpoint` Submodule" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityRegionalEndpoint <a name="NetworkConnectivityRegionalEndpoint" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint google_network_connectivity_regional_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_type: str,
  location: str,
  name: str,
  target_google_api: str,
  address: str = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  project: str = None,
  subnetwork: str = None,
  timeouts: NetworkConnectivityRegionalEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.targetGoogleApi">target_google_api</a></code> | <code>str</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.rep.googleapis.com' Example: \"cloudkms.us-central1.rep.googleapis.com\". |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.address">address</a></code> | <code>str</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.accessType"></a>

- *Type:* str

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#access_type NetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.location"></a>

- *Type:* str

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#location NetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.name"></a>

- *Type:* str

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#name NetworkConnectivityRegionalEndpoint#name}

---

##### `target_google_api`<sup>Required</sup> <a name="target_google_api" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.targetGoogleApi"></a>

- *Type:* str

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.rep.googleapis.com' Example: \"cloudkms.us-central1.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#target_google_api NetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.address"></a>

- *Type:* str

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#address NetworkConnectivityRegionalEndpoint#address}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#deletion_policy NetworkConnectivityRegionalEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.description"></a>

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#description NetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#labels NetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#network NetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#subnetwork NetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#timeouts NetworkConnectivityRegionalEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}.

---

##### `reset_address` <a name="reset_address" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkConnectivityRegionalEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkConnectivityRegionalEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkConnectivityRegionalEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkConnectivityRegionalEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityRegionalEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.pscForwardingRule">psc_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference">NetworkConnectivityRegionalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput">target_google_api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApi">target_google_api</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `psc_forwarding_rule`<sup>Required</sup> <a name="psc_forwarding_rule" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.pscForwardingRule"></a>

```python
psc_forwarding_rule: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeouts"></a>

```python
timeouts: NetworkConnectivityRegionalEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference">NetworkConnectivityRegionalEndpointTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `target_google_api_input`<sup>Optional</sup> <a name="target_google_api_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput"></a>

```python
target_google_api_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkConnectivityRegionalEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `target_google_api`<sup>Required</sup> <a name="target_google_api" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApi"></a>

```python
target_google_api: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityRegionalEndpointConfig <a name="NetworkConnectivityRegionalEndpointConfig" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_type: str,
  location: str,
  name: str,
  target_google_api: str,
  address: str = None,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  project: str = None,
  subnetwork: str = None,
  timeouts: NetworkConnectivityRegionalEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.accessType">access_type</a></code> | <code>str</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.location">location</a></code> | <code>str</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.name">name</a></code> | <code>str</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi">target_google_api</a></code> | <code>str</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.rep.googleapis.com' Example: \"cloudkms.us-central1.rep.googleapis.com\". |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.address">address</a></code> | <code>str</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#access_type NetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#location NetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#name NetworkConnectivityRegionalEndpoint#name}

---

##### `target_google_api`<sup>Required</sup> <a name="target_google_api" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi"></a>

```python
target_google_api: str
```

- *Type:* str

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.rep.googleapis.com' Example: \"cloudkms.us-central1.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#target_google_api NetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#address NetworkConnectivityRegionalEndpoint#address}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#deletion_policy NetworkConnectivityRegionalEndpoint#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#description NetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#labels NetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#network NetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#subnetwork NetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityRegionalEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#timeouts NetworkConnectivityRegionalEndpoint#timeouts}

---

### NetworkConnectivityRegionalEndpointTimeouts <a name="NetworkConnectivityRegionalEndpointTimeouts" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityRegionalEndpointTimeoutsOutputReference <a name="NetworkConnectivityRegionalEndpointTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_regional_endpoint

networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkConnectivityRegionalEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---



