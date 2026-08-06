# `networkServicesMulticastDomain` Submodule <a name="`networkServicesMulticastDomain` Submodule" id="@cdktn/provider-google.networkServicesMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesMulticastDomain <a name="NetworkServicesMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain google_network_services_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomain(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_network: str,
  connection_config: NetworkServicesMulticastDomainConnectionConfig,
  location: str,
  multicast_domain_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  multicast_domain_group: str = None,
  project: str = None,
  timeouts: NetworkServicesMulticastDomainTimeouts = None,
  ull_multicast_domain: NetworkServicesMulticastDomainUllMulticastDomain = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.adminNetwork">admin_network</a></code> | <code>str</code> | The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.connectionConfig">connection_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | connection_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.multicastDomainId">multicast_domain_id</a></code> | <code>str</code> | A unique name for the multicast domain. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional text description of the multicast domain. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.multicastDomainGroup">multicast_domain_group</a></code> | <code>str</code> | The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.ullMulticastDomain">ull_multicast_domain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | ull_multicast_domain block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_network`<sup>Required</sup> <a name="admin_network" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.adminNetwork"></a>

- *Type:* str

The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#admin_network NetworkServicesMulticastDomain#admin_network}

---

##### `connection_config`<sup>Required</sup> <a name="connection_config" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.connectionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#connection_config NetworkServicesMulticastDomain#connection_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#location NetworkServicesMulticastDomain#location}

---

##### `multicast_domain_id`<sup>Required</sup> <a name="multicast_domain_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.multicastDomainId"></a>

- *Type:* str

A unique name for the multicast domain.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#multicast_domain_id NetworkServicesMulticastDomain#multicast_domain_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#deletion_policy NetworkServicesMulticastDomain#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.description"></a>

- *Type:* str

An optional text description of the multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#description NetworkServicesMulticastDomain#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#labels NetworkServicesMulticastDomain#labels}

---

##### `multicast_domain_group`<sup>Optional</sup> <a name="multicast_domain_group" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.multicastDomainGroup"></a>

- *Type:* str

The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#multicast_domain_group NetworkServicesMulticastDomain#multicast_domain_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#timeouts NetworkServicesMulticastDomain#timeouts}

---

##### `ull_multicast_domain`<sup>Optional</sup> <a name="ull_multicast_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.Initializer.parameter.ullMulticastDomain"></a>

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

ull_multicast_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#ull_multicast_domain NetworkServicesMulticastDomain#ull_multicast_domain}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig">put_connection_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putUllMulticastDomain">put_ull_multicast_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetMulticastDomainGroup">reset_multicast_domain_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetUllMulticastDomain">reset_ull_multicast_domain</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_config` <a name="put_connection_config" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig"></a>

```python
def put_connection_config(
  connection_type: str,
  ncc_hub: str = None
) -> None
```

###### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig.parameter.connectionType"></a>

- *Type:* str

The VPC connection type. Possible values: NCC SAME_VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#connection_type NetworkServicesMulticastDomain#connection_type}

---

###### `ncc_hub`<sup>Optional</sup> <a name="ncc_hub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putConnectionConfig.parameter.nccHub"></a>

- *Type:* str

The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#ncc_hub NetworkServicesMulticastDomain#ncc_hub}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#create NetworkServicesMulticastDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#delete NetworkServicesMulticastDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#update NetworkServicesMulticastDomain#update}.

---

##### `put_ull_multicast_domain` <a name="put_ull_multicast_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putUllMulticastDomain"></a>

```python
def put_ull_multicast_domain(
  preconfigured_ull_domain: str = None
) -> None
```

###### `preconfigured_ull_domain`<sup>Optional</sup> <a name="preconfigured_ull_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.putUllMulticastDomain.parameter.preconfiguredUllDomain"></a>

- *Type:* str

The preconfigured Ultra-Low-Latency domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#preconfigured_ull_domain NetworkServicesMulticastDomain#preconfigured_ull_domain}

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_multicast_domain_group` <a name="reset_multicast_domain_group" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetMulticastDomainGroup"></a>

```python
def reset_multicast_domain_group() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ull_multicast_domain` <a name="reset_ull_multicast_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.resetUllMulticastDomain"></a>

```python
def reset_ull_multicast_domain() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isConstruct"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformElement"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformResource"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesMulticastDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesMulticastDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkServicesMulticastDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfig">connection_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference">NetworkServicesMulticastDomainConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.state">state</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList">NetworkServicesMulticastDomainStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference">NetworkServicesMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomain">ull_multicast_domain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference">NetworkServicesMulticastDomainUllMulticastDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.uniqueId">unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetworkInput">admin_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfigInput">connection_config_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroupInput">multicast_domain_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainIdInput">multicast_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomainInput">ull_multicast_domain_input</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetwork">admin_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroup">multicast_domain_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainId">multicast_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_config`<sup>Required</sup> <a name="connection_config" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfig"></a>

```python
connection_config: NetworkServicesMulticastDomainConnectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference">NetworkServicesMulticastDomainConnectionConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.state"></a>

```python
state: NetworkServicesMulticastDomainStateList
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList">NetworkServicesMulticastDomainStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference">NetworkServicesMulticastDomainTimeoutsOutputReference</a>

---

##### `ull_multicast_domain`<sup>Required</sup> <a name="ull_multicast_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomain"></a>

```python
ull_multicast_domain: NetworkServicesMulticastDomainUllMulticastDomainOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference">NetworkServicesMulticastDomainUllMulticastDomainOutputReference</a>

---

##### `unique_id`<sup>Required</sup> <a name="unique_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.uniqueId"></a>

```python
unique_id: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `admin_network_input`<sup>Optional</sup> <a name="admin_network_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetworkInput"></a>

```python
admin_network_input: str
```

- *Type:* str

---

##### `connection_config_input`<sup>Optional</sup> <a name="connection_config_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.connectionConfigInput"></a>

```python
connection_config_input: NetworkServicesMulticastDomainConnectionConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `multicast_domain_group_input`<sup>Optional</sup> <a name="multicast_domain_group_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroupInput"></a>

```python
multicast_domain_group_input: str
```

- *Type:* str

---

##### `multicast_domain_id_input`<sup>Optional</sup> <a name="multicast_domain_id_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainIdInput"></a>

```python
multicast_domain_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkServicesMulticastDomainTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

---

##### `ull_multicast_domain_input`<sup>Optional</sup> <a name="ull_multicast_domain_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.ullMulticastDomainInput"></a>

```python
ull_multicast_domain_input: NetworkServicesMulticastDomainUllMulticastDomain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

---

##### `admin_network`<sup>Required</sup> <a name="admin_network" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.adminNetwork"></a>

```python
admin_network: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `multicast_domain_group`<sup>Required</sup> <a name="multicast_domain_group" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainGroup"></a>

```python
multicast_domain_group: str
```

- *Type:* str

---

##### `multicast_domain_id`<sup>Required</sup> <a name="multicast_domain_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.multicastDomainId"></a>

```python
multicast_domain_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesMulticastDomainConfig <a name="NetworkServicesMulticastDomainConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_network: str,
  connection_config: NetworkServicesMulticastDomainConnectionConfig,
  location: str,
  multicast_domain_id: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  multicast_domain_group: str = None,
  project: str = None,
  timeouts: NetworkServicesMulticastDomainTimeouts = None,
  ull_multicast_domain: NetworkServicesMulticastDomainUllMulticastDomain = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.adminNetwork">admin_network</a></code> | <code>str</code> | The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connectionConfig">connection_config</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | connection_config block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainId">multicast_domain_id</a></code> | <code>str</code> | A unique name for the multicast domain. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.description">description</a></code> | <code>str</code> | An optional text description of the multicast domain. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainGroup">multicast_domain_group</a></code> | <code>str</code> | The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.ullMulticastDomain">ull_multicast_domain</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | ull_multicast_domain block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_network`<sup>Required</sup> <a name="admin_network" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.adminNetwork"></a>

```python
admin_network: str
```

- *Type:* str

The resource name of the multicast admin VPC network. Use the following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#admin_network NetworkServicesMulticastDomain#admin_network}

---

##### `connection_config`<sup>Required</sup> <a name="connection_config" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.connectionConfig"></a>

```python
connection_config: NetworkServicesMulticastDomainConnectionConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#connection_config NetworkServicesMulticastDomain#connection_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#location NetworkServicesMulticastDomain#location}

---

##### `multicast_domain_id`<sup>Required</sup> <a name="multicast_domain_id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainId"></a>

```python
multicast_domain_id: str
```

- *Type:* str

A unique name for the multicast domain.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#multicast_domain_id NetworkServicesMulticastDomain#multicast_domain_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#deletion_policy NetworkServicesMulticastDomain#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional text description of the multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#description NetworkServicesMulticastDomain#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#labels NetworkServicesMulticastDomain#labels}

---

##### `multicast_domain_group`<sup>Optional</sup> <a name="multicast_domain_group" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.multicastDomainGroup"></a>

```python
multicast_domain_group: str
```

- *Type:* str

The multicast domain group this domain should be associated with. Use the following format: 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#multicast_domain_group NetworkServicesMulticastDomain#multicast_domain_group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesMulticastDomainTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#timeouts NetworkServicesMulticastDomain#timeouts}

---

##### `ull_multicast_domain`<sup>Optional</sup> <a name="ull_multicast_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConfig.property.ullMulticastDomain"></a>

```python
ull_multicast_domain: NetworkServicesMulticastDomainUllMulticastDomain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

ull_multicast_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#ull_multicast_domain NetworkServicesMulticastDomain#ull_multicast_domain}

---

### NetworkServicesMulticastDomainConnectionConfig <a name="NetworkServicesMulticastDomainConnectionConfig" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig(
  connection_type: str,
  ncc_hub: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.connectionType">connection_type</a></code> | <code>str</code> | The VPC connection type. Possible values: NCC SAME_VPC. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.nccHub">ncc_hub</a></code> | <code>str</code> | The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'. |

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

The VPC connection type. Possible values: NCC SAME_VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#connection_type NetworkServicesMulticastDomain#connection_type}

---

##### `ncc_hub`<sup>Optional</sup> <a name="ncc_hub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig.property.nccHub"></a>

```python
ncc_hub: str
```

- *Type:* str

The resource name of the [NCC](https://cloud.google.com/network-connectivity-center) hub. Use the following format: 'projects/{project}/locations/global/hubs/{hub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#ncc_hub NetworkServicesMulticastDomain#ncc_hub}

---

### NetworkServicesMulticastDomainState <a name="NetworkServicesMulticastDomainState" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainState()
```


### NetworkServicesMulticastDomainTimeouts <a name="NetworkServicesMulticastDomainTimeouts" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#create NetworkServicesMulticastDomain#create}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#delete NetworkServicesMulticastDomain#delete}. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#update NetworkServicesMulticastDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#create NetworkServicesMulticastDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#delete NetworkServicesMulticastDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#update NetworkServicesMulticastDomain#update}.

---

### NetworkServicesMulticastDomainUllMulticastDomain <a name="NetworkServicesMulticastDomainUllMulticastDomain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain(
  preconfigured_ull_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain">preconfigured_ull_domain</a></code> | <code>str</code> | The preconfigured Ultra-Low-Latency domain name. |

---

##### `preconfigured_ull_domain`<sup>Optional</sup> <a name="preconfigured_ull_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain.property.preconfiguredUllDomain"></a>

```python
preconfigured_ull_domain: str
```

- *Type:* str

The preconfigured Ultra-Low-Latency domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/network_services_multicast_domain#preconfigured_ull_domain NetworkServicesMulticastDomain#preconfigured_ull_domain}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesMulticastDomainConnectionConfigOutputReference <a name="NetworkServicesMulticastDomainConnectionConfigOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub">reset_ncc_hub</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ncc_hub` <a name="reset_ncc_hub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.resetNccHub"></a>

```python
def reset_ncc_hub() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput">ncc_hub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub">ncc_hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `ncc_hub_input`<sup>Optional</sup> <a name="ncc_hub_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHubInput"></a>

```python
ncc_hub_input: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `ncc_hub`<sup>Required</sup> <a name="ncc_hub" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.nccHub"></a>

```python
ncc_hub: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastDomainConnectionConfig
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainConnectionConfig">NetworkServicesMulticastDomainConnectionConfig</a>

---


### NetworkServicesMulticastDomainStateList <a name="NetworkServicesMulticastDomainStateList" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesMulticastDomainStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkServicesMulticastDomainStateOutputReference <a name="NetworkServicesMulticastDomainStateOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState">NetworkServicesMulticastDomainState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainStateOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastDomainState
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainState">NetworkServicesMulticastDomainState</a>

---


### NetworkServicesMulticastDomainTimeoutsOutputReference <a name="NetworkServicesMulticastDomainTimeoutsOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkServicesMulticastDomainTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainTimeouts">NetworkServicesMulticastDomainTimeouts</a>

---


### NetworkServicesMulticastDomainUllMulticastDomainOutputReference <a name="NetworkServicesMulticastDomainUllMulticastDomainOutputReference" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_services_multicast_domain

networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain">reset_preconfigured_ull_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preconfigured_ull_domain` <a name="reset_preconfigured_ull_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.resetPreconfiguredUllDomain"></a>

```python
def reset_preconfigured_ull_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput">preconfigured_ull_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain">preconfigured_ull_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preconfigured_ull_domain_input`<sup>Optional</sup> <a name="preconfigured_ull_domain_input" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomainInput"></a>

```python
preconfigured_ull_domain_input: str
```

- *Type:* str

---

##### `preconfigured_ull_domain`<sup>Required</sup> <a name="preconfigured_ull_domain" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.preconfiguredUllDomain"></a>

```python
preconfigured_ull_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomainOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesMulticastDomainUllMulticastDomain
```

- *Type:* <a href="#@cdktn/provider-google.networkServicesMulticastDomain.NetworkServicesMulticastDomainUllMulticastDomain">NetworkServicesMulticastDomainUllMulticastDomain</a>

---



