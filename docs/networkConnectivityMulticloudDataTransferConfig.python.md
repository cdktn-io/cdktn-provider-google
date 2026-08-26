# `networkConnectivityMulticloudDataTransferConfig` Submodule <a name="`networkConnectivityMulticloudDataTransferConfig` Submodule" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityMulticloudDataTransferConfig <a name="NetworkConnectivityMulticloudDataTransferConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config google_network_connectivity_multicloud_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  services: IResolvable | typing.List[NetworkConnectivityMulticloudDataTransferConfigServices] = None,
  timeouts: NetworkConnectivityMulticloudDataTransferConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.services">services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | services block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#location NetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.name"></a>

- *Type:* str

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#name NetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#deletion_policy NetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.description"></a>

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#description NetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#labels NetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.services"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#services NetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#timeouts NetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices">put_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices">reset_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_services` <a name="put_services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices"></a>

```python
def put_services(
  value: IResolvable | typing.List[NetworkConnectivityMulticloudDataTransferConfigServices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetServices"></a>

```python
def reset_services() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkConnectivityMulticloudDataTransferConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkConnectivityMulticloudDataTransferConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkConnectivityMulticloudDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityMulticloudDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount">destinations_active_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount">destinations_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services">services</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput">services_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations_active_count`<sup>Required</sup> <a name="destinations_active_count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsActiveCount"></a>

```python
destinations_active_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destinations_count`<sup>Required</sup> <a name="destinations_count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.destinationsCount"></a>

```python
destinations_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.services"></a>

```python
services: NetworkConnectivityMulticloudDataTransferConfigServicesList
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList">NetworkConnectivityMulticloudDataTransferConfigServicesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference">NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.servicesInput"></a>

```python
services_input: IResolvable | typing.List[NetworkConnectivityMulticloudDataTransferConfigServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityMulticloudDataTransferConfigConfig <a name="NetworkConnectivityMulticloudDataTransferConfigConfig" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  services: IResolvable | typing.List[NetworkConnectivityMulticloudDataTransferConfigServices] = None,
  timeouts: NetworkConnectivityMulticloudDataTransferConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the multicloud data transfer config. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name">name</a></code> | <code>str</code> | The name of the MulticloudDataTransferConfig resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description">description</a></code> | <code>str</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services">services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | services block. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the multicloud data transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#location NetworkConnectivityMulticloudDataTransferConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the MulticloudDataTransferConfig resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#name NetworkConnectivityMulticloudDataTransferConfig#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#deletion_policy NetworkConnectivityMulticloudDataTransferConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#description NetworkConnectivityMulticloudDataTransferConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#id NetworkConnectivityMulticloudDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#labels NetworkConnectivityMulticloudDataTransferConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#project NetworkConnectivityMulticloudDataTransferConfig#project}.

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.services"></a>

```python
services: IResolvable | typing.List[NetworkConnectivityMulticloudDataTransferConfigServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#services NetworkConnectivityMulticloudDataTransferConfig#services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigConfig.property.timeouts"></a>

```python
timeouts: NetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#timeouts NetworkConnectivityMulticloudDataTransferConfig#timeouts}

---

### NetworkConnectivityMulticloudDataTransferConfigServices <a name="NetworkConnectivityMulticloudDataTransferConfigServices" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices(
  service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName">service_name</a></code> | <code>str</code> | The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the service, like "big-query" or "cloud-storage". This corresponds to the map key in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#service_name NetworkConnectivityMulticloudDataTransferConfig#service_name}

---

### NetworkConnectivityMulticloudDataTransferConfigServicesStates <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStates" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates()
```


### NetworkConnectivityMulticloudDataTransferConfigTimeouts <a name="NetworkConnectivityMulticloudDataTransferConfigTimeouts" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#create NetworkConnectivityMulticloudDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#delete NetworkConnectivityMulticloudDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_connectivity_multicloud_data_transfer_config#update NetworkConnectivityMulticloudDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityMulticloudDataTransferConfigServicesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkConnectivityMulticloudDataTransferConfigServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>]

---


### NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states">states</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.states"></a>

```python
states: NetworkConnectivityMulticloudDataTransferConfigServicesStatesList
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList">NetworkConnectivityMulticloudDataTransferConfigServicesStatesList</a>

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkConnectivityMulticloudDataTransferConfigServices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServices">NetworkConnectivityMulticloudDataTransferConfigServices</a>

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesList <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesList" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime">effective_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_time`<sup>Required</sup> <a name="effective_time" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.effectiveTime"></a>

```python
effective_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStatesOutputReference.property.internalValue"></a>

```python
internal_value: NetworkConnectivityMulticloudDataTransferConfigServicesStates
```

- *Type:* <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigServicesStates">NetworkConnectivityMulticloudDataTransferConfigServicesStates</a>

---


### NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference <a name="NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_connectivity_multicloud_data_transfer_config

networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkConnectivityMulticloudDataTransferConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkConnectivityMulticloudDataTransferConfig.NetworkConnectivityMulticloudDataTransferConfigTimeouts">NetworkConnectivityMulticloudDataTransferConfigTimeouts</a>

---



