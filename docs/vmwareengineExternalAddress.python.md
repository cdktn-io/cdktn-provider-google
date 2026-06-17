# `vmwareengineExternalAddress` Submodule <a name="`vmwareengineExternalAddress` Submodule" id="@cdktn/provider-google.vmwareengineExternalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineExternalAddress <a name="VmwareengineExternalAddress" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address google_vmwareengine_external_address}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddress(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  internal_ip: str,
  name: str,
  parent: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  timeouts: VmwareengineExternalAddressTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.internalIp">internal_ip</a></code> | <code>str</code> | The internal IP address of a workload VM. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the external IP Address. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new external address in. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#id VmwareengineExternalAddress#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.internalIp"></a>

- *Type:* str

The internal IP address of a workload VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#internal_ip VmwareengineExternalAddress#internal_ip}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.name"></a>

- *Type:* str

The ID of the external IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#name VmwareengineExternalAddress#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the private cloud to create a new external address in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#parent VmwareengineExternalAddress#parent}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#deletion_policy VmwareengineExternalAddress#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#description VmwareengineExternalAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#id VmwareengineExternalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#timeouts VmwareengineExternalAddress#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#create VmwareengineExternalAddress#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#delete VmwareengineExternalAddress#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#update VmwareengineExternalAddress#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VmwareengineExternalAddress resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VmwareengineExternalAddress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareengineExternalAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareengineExternalAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineExternalAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.externalIp">external_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference">VmwareengineExternalAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIpInput">internal_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIp">internal_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `external_ip`<sup>Required</sup> <a name="external_ip" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.externalIp"></a>

```python
external_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeouts"></a>

```python
timeouts: VmwareengineExternalAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference">VmwareengineExternalAddressTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_ip_input`<sup>Optional</sup> <a name="internal_ip_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIpInput"></a>

```python
internal_ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VmwareengineExternalAddressTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.internalIp"></a>

```python
internal_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineExternalAddressConfig <a name="VmwareengineExternalAddressConfig" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddressConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  internal_ip: str,
  name: str,
  parent: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  timeouts: VmwareengineExternalAddressTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.internalIp">internal_ip</a></code> | <code>str</code> | The internal IP address of a workload VM. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.name">name</a></code> | <code>str</code> | The ID of the external IP Address. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new external address in. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.description">description</a></code> | <code>str</code> | User-provided description for this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#id VmwareengineExternalAddress#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.internalIp"></a>

```python
internal_ip: str
```

- *Type:* str

The internal IP address of a workload VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#internal_ip VmwareengineExternalAddress#internal_ip}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the external IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#name VmwareengineExternalAddress#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the private cloud to create a new external address in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#parent VmwareengineExternalAddress#parent}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#deletion_policy VmwareengineExternalAddress#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#description VmwareengineExternalAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#id VmwareengineExternalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressConfig.property.timeouts"></a>

```python
timeouts: VmwareengineExternalAddressTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#timeouts VmwareengineExternalAddress#timeouts}

---

### VmwareengineExternalAddressTimeouts <a name="VmwareengineExternalAddressTimeouts" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#create VmwareengineExternalAddress#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#delete VmwareengineExternalAddress#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#update VmwareengineExternalAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#create VmwareengineExternalAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#delete VmwareengineExternalAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/vmwareengine_external_address#update VmwareengineExternalAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineExternalAddressTimeoutsOutputReference <a name="VmwareengineExternalAddressTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_external_address

vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VmwareengineExternalAddressTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vmwareengineExternalAddress.VmwareengineExternalAddressTimeouts">VmwareengineExternalAddressTimeouts</a>

---



