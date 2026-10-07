# `chronicleCaseCloseDefinition` Submodule <a name="`chronicleCaseCloseDefinition` Submodule" id="@cdktn/provider-google.chronicleCaseCloseDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleCaseCloseDefinition <a name="ChronicleCaseCloseDefinition" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition google_chronicle_case_close_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  close_reason: str,
  instance: str,
  location: str,
  root_cause: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleCaseCloseDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.closeReason">close_reason</a></code> | <code>str</code> | Specify why the case was closed. Possible values: ["MALICIOUS", "NOT_MALICIOUS", "MAINTENANCE", "INCONCLUSIVE"]. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.rootCause">root_cause</a></code> | <code>str</code> | Provides detailed description about the specific root cause option. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#id ChronicleCaseCloseDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#project ChronicleCaseCloseDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `close_reason`<sup>Required</sup> <a name="close_reason" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.closeReason"></a>

- *Type:* str

Specify why the case was closed. Possible values: ["MALICIOUS", "NOT_MALICIOUS", "MAINTENANCE", "INCONCLUSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#close_reason ChronicleCaseCloseDefinition#close_reason}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#instance ChronicleCaseCloseDefinition#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#location ChronicleCaseCloseDefinition#location}

---

##### `root_cause`<sup>Required</sup> <a name="root_cause" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.rootCause"></a>

- *Type:* str

Provides detailed description about the specific root cause option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#root_cause ChronicleCaseCloseDefinition#root_cause}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#deletion_policy ChronicleCaseCloseDefinition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#id ChronicleCaseCloseDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#project ChronicleCaseCloseDefinition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#timeouts ChronicleCaseCloseDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#create ChronicleCaseCloseDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#delete ChronicleCaseCloseDefinition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#update ChronicleCaseCloseDefinition#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleCaseCloseDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleCaseCloseDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleCaseCloseDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleCaseCloseDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleCaseCloseDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.caseCloseDefinitionId">case_close_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference">ChronicleCaseCloseDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.closeReasonInput">close_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.rootCauseInput">root_cause_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.closeReason">close_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.rootCause">root_cause</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `case_close_definition_id`<sup>Required</sup> <a name="case_close_definition_id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.caseCloseDefinitionId"></a>

```python
case_close_definition_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.timeouts"></a>

```python
timeouts: ChronicleCaseCloseDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference">ChronicleCaseCloseDefinitionTimeoutsOutputReference</a>

---

##### `close_reason_input`<sup>Optional</sup> <a name="close_reason_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.closeReasonInput"></a>

```python
close_reason_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `root_cause_input`<sup>Optional</sup> <a name="root_cause_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.rootCauseInput"></a>

```python
root_cause_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleCaseCloseDefinitionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a>

---

##### `close_reason`<sup>Required</sup> <a name="close_reason" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.closeReason"></a>

```python
close_reason: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `root_cause`<sup>Required</sup> <a name="root_cause" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.rootCause"></a>

```python
root_cause: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleCaseCloseDefinitionConfig <a name="ChronicleCaseCloseDefinitionConfig" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  close_reason: str,
  instance: str,
  location: str,
  root_cause: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleCaseCloseDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.closeReason">close_reason</a></code> | <code>str</code> | Specify why the case was closed. Possible values: ["MALICIOUS", "NOT_MALICIOUS", "MAINTENANCE", "INCONCLUSIVE"]. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.rootCause">root_cause</a></code> | <code>str</code> | Provides detailed description about the specific root cause option. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#id ChronicleCaseCloseDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#project ChronicleCaseCloseDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `close_reason`<sup>Required</sup> <a name="close_reason" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.closeReason"></a>

```python
close_reason: str
```

- *Type:* str

Specify why the case was closed. Possible values: ["MALICIOUS", "NOT_MALICIOUS", "MAINTENANCE", "INCONCLUSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#close_reason ChronicleCaseCloseDefinition#close_reason}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#instance ChronicleCaseCloseDefinition#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#location ChronicleCaseCloseDefinition#location}

---

##### `root_cause`<sup>Required</sup> <a name="root_cause" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.rootCause"></a>

```python
root_cause: str
```

- *Type:* str

Provides detailed description about the specific root cause option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#root_cause ChronicleCaseCloseDefinition#root_cause}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#deletion_policy ChronicleCaseCloseDefinition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#id ChronicleCaseCloseDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#project ChronicleCaseCloseDefinition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionConfig.property.timeouts"></a>

```python
timeouts: ChronicleCaseCloseDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#timeouts ChronicleCaseCloseDefinition#timeouts}

---

### ChronicleCaseCloseDefinitionTimeouts <a name="ChronicleCaseCloseDefinitionTimeouts" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#create ChronicleCaseCloseDefinition#create}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#delete ChronicleCaseCloseDefinition#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#update ChronicleCaseCloseDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#create ChronicleCaseCloseDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#delete ChronicleCaseCloseDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_close_definition#update ChronicleCaseCloseDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleCaseCloseDefinitionTimeoutsOutputReference <a name="ChronicleCaseCloseDefinitionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_close_definition

chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleCaseCloseDefinitionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleCaseCloseDefinition.ChronicleCaseCloseDefinitionTimeouts">ChronicleCaseCloseDefinitionTimeouts</a>

---



