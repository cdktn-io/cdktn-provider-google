# `networkManagementNetworkMonitoringProvider` Submodule <a name="`networkManagementNetworkMonitoringProvider` Submodule" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagementNetworkMonitoringProvider <a name="NetworkManagementNetworkMonitoringProvider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider google_network_management_network_monitoring_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider(
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
  network_monitoring_provider_id: str,
  provider_type: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: NetworkManagementNetworkMonitoringProviderTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Network Monitoring Provider. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.networkMonitoringProviderId">network_monitoring_provider_id</a></code> | <code>str</code> | The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.providerType">provider_type</a></code> | <code>str</code> | The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the Network Monitoring Provider. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#id NetworkManagementNetworkMonitoringProvider#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#project NetworkManagementNetworkMonitoringProvider#project}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.location"></a>

- *Type:* str

The location of the Network Monitoring Provider. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#location NetworkManagementNetworkMonitoringProvider#location}

---

##### `network_monitoring_provider_id`<sup>Required</sup> <a name="network_monitoring_provider_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.networkMonitoringProviderId"></a>

- *Type:* str

The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#network_monitoring_provider_id NetworkManagementNetworkMonitoringProvider#network_monitoring_provider_id}

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.providerType"></a>

- *Type:* str

The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#provider_type NetworkManagementNetworkMonitoringProvider#provider_type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

The deletion policy for the Network Monitoring Provider.

Setting 'deletion_policy = "FORCE"' forces the deletion of all nested resources
(MonitoringPoints, NetworkPaths, WebPaths) belonging to this provider on deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#deletion_policy NetworkManagementNetworkMonitoringProvider#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#id NetworkManagementNetworkMonitoringProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#project NetworkManagementNetworkMonitoringProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#timeouts NetworkManagementNetworkMonitoringProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#create NetworkManagementNetworkMonitoringProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#delete NetworkManagementNetworkMonitoringProvider#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#update NetworkManagementNetworkMonitoringProvider#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkManagementNetworkMonitoringProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isConstruct"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformElement"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformResource"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkManagementNetworkMonitoringProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkManagementNetworkMonitoringProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkManagementNetworkMonitoringProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagementNetworkMonitoringProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.errors">errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerUri">provider_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference">NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderIdInput">network_monitoring_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderId">network_monitoring_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.errors"></a>

```python
errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_uri`<sup>Required</sup> <a name="provider_uri" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerUri"></a>

```python
provider_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeouts"></a>

```python
timeouts: NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference">NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `network_monitoring_provider_id_input`<sup>Optional</sup> <a name="network_monitoring_provider_id_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderIdInput"></a>

```python
network_monitoring_provider_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkManagementNetworkMonitoringProviderTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network_monitoring_provider_id`<sup>Required</sup> <a name="network_monitoring_provider_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.networkMonitoringProviderId"></a>

```python
network_monitoring_provider_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagementNetworkMonitoringProviderConfig <a name="NetworkManagementNetworkMonitoringProviderConfig" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.Initializer"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  network_monitoring_provider_id: str,
  provider_type: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: NetworkManagementNetworkMonitoringProviderTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.location">location</a></code> | <code>str</code> | The location of the Network Monitoring Provider. Currently only 'global' is supported. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.networkMonitoringProviderId">network_monitoring_provider_id</a></code> | <code>str</code> | The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.providerType">provider_type</a></code> | <code>str</code> | The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the Network Monitoring Provider. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#id NetworkManagementNetworkMonitoringProvider#id}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#project NetworkManagementNetworkMonitoringProvider#project}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Network Monitoring Provider. Currently only 'global' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#location NetworkManagementNetworkMonitoringProvider#location}

---

##### `network_monitoring_provider_id`<sup>Required</sup> <a name="network_monitoring_provider_id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.networkMonitoringProviderId"></a>

```python
network_monitoring_provider_id: str
```

- *Type:* str

The ID to use for the Network Monitoring Provider. This will become the last component of the provider's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#network_monitoring_provider_id NetworkManagementNetworkMonitoringProvider#network_monitoring_provider_id}

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

The type of the Network Monitoring Provider. Currently only 'EXTERNAL' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#provider_type NetworkManagementNetworkMonitoringProvider#provider_type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The deletion policy for the Network Monitoring Provider.

Setting 'deletion_policy = "FORCE"' forces the deletion of all nested resources
(MonitoringPoints, NetworkPaths, WebPaths) belonging to this provider on deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#deletion_policy NetworkManagementNetworkMonitoringProvider#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#id NetworkManagementNetworkMonitoringProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#project NetworkManagementNetworkMonitoringProvider#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderConfig.property.timeouts"></a>

```python
timeouts: NetworkManagementNetworkMonitoringProviderTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#timeouts NetworkManagementNetworkMonitoringProvider#timeouts}

---

### NetworkManagementNetworkMonitoringProviderTimeouts <a name="NetworkManagementNetworkMonitoringProviderTimeouts" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.Initializer"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#create NetworkManagementNetworkMonitoringProvider#create}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#delete NetworkManagementNetworkMonitoringProvider#delete}. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#update NetworkManagementNetworkMonitoringProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#create NetworkManagementNetworkMonitoringProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#delete NetworkManagementNetworkMonitoringProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/network_management_network_monitoring_provider#update NetworkManagementNetworkMonitoringProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference <a name="NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import network_management_network_monitoring_provider

networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkManagementNetworkMonitoringProviderTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.networkManagementNetworkMonitoringProvider.NetworkManagementNetworkMonitoringProviderTimeouts">NetworkManagementNetworkMonitoringProviderTimeouts</a>

---



