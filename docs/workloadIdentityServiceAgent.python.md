# `workloadIdentityServiceAgent` Submodule <a name="`workloadIdentityServiceAgent` Submodule" id="@cdktn/provider-google.workloadIdentityServiceAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadIdentityServiceAgent <a name="WorkloadIdentityServiceAgent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent google_workload_identity_service_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  id: str = None,
  timeouts: WorkloadIdentityServiceAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.parent"></a>

- *Type:* str

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#parent WorkloadIdentityServiceAgent#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#timeouts WorkloadIdentityServiceAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkloadIdentityServiceAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkloadIdentityServiceAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkloadIdentityServiceAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.serviceAgents">service_agents</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList">WorkloadIdentityServiceAgentServiceAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference">WorkloadIdentityServiceAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_agents`<sup>Required</sup> <a name="service_agents" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.serviceAgents"></a>

```python
service_agents: WorkloadIdentityServiceAgentServiceAgentsList
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList">WorkloadIdentityServiceAgentServiceAgentsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeouts"></a>

```python
timeouts: WorkloadIdentityServiceAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference">WorkloadIdentityServiceAgentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WorkloadIdentityServiceAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadIdentityServiceAgentConfig <a name="WorkloadIdentityServiceAgentConfig" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  id: str = None,
  timeouts: WorkloadIdentityServiceAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.parent">parent</a></code> | <code>str</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#parent WorkloadIdentityServiceAgent#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#id WorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentConfig.property.timeouts"></a>

```python
timeouts: WorkloadIdentityServiceAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#timeouts WorkloadIdentityServiceAgent#timeouts}

---

### WorkloadIdentityServiceAgentServiceAgents <a name="WorkloadIdentityServiceAgentServiceAgents" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents()
```


### WorkloadIdentityServiceAgentTimeouts <a name="WorkloadIdentityServiceAgentTimeouts" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#create WorkloadIdentityServiceAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/workload_identity_service_agent#delete WorkloadIdentityServiceAgent#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadIdentityServiceAgentServiceAgentsList <a name="WorkloadIdentityServiceAgentServiceAgentsList" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkloadIdentityServiceAgentServiceAgentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WorkloadIdentityServiceAgentServiceAgentsOutputReference <a name="WorkloadIdentityServiceAgentServiceAgentsOutputReference" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer">service_producer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents">WorkloadIdentityServiceAgentServiceAgents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_producer`<sup>Required</sup> <a name="service_producer" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer"></a>

```python
service_producer: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadIdentityServiceAgentServiceAgents
```

- *Type:* <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentServiceAgents">WorkloadIdentityServiceAgentServiceAgents</a>

---


### WorkloadIdentityServiceAgentTimeoutsOutputReference <a name="WorkloadIdentityServiceAgentTimeoutsOutputReference" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import workload_identity_service_agent

workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkloadIdentityServiceAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.workloadIdentityServiceAgent.WorkloadIdentityServiceAgentTimeouts">WorkloadIdentityServiceAgentTimeouts</a>

---



