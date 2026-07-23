# `iapAgentRegistryAgentIamMember` Submodule <a name="`iapAgentRegistryAgentIamMember` Submodule" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryAgentIamMember <a name="IapAgentRegistryAgentIamMember" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member google_iap_agent_registry_agent_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_id: str,
  member: str,
  role: str,
  condition: IapAgentRegistryAgentIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#agent_id IapAgentRegistryAgentIamMember#agent_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#member IapAgentRegistryAgentIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#role IapAgentRegistryAgentIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#id IapAgentRegistryAgentIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#location IapAgentRegistryAgentIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#project IapAgentRegistryAgentIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#agent_id IapAgentRegistryAgentIamMember#agent_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#member IapAgentRegistryAgentIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#role IapAgentRegistryAgentIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#condition IapAgentRegistryAgentIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#id IapAgentRegistryAgentIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#location IapAgentRegistryAgentIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#project IapAgentRegistryAgentIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#expression IapAgentRegistryAgentIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#title IapAgentRegistryAgentIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#description IapAgentRegistryAgentIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IapAgentRegistryAgentIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isConstruct"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IapAgentRegistryAgentIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IapAgentRegistryAgentIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IapAgentRegistryAgentIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryAgentIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference">IapAgentRegistryAgentIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.condition"></a>

```python
condition: IapAgentRegistryAgentIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference">IapAgentRegistryAgentIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.conditionInput"></a>

```python
condition_input: IapAgentRegistryAgentIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryAgentIamMemberCondition <a name="IapAgentRegistryAgentIamMemberCondition" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#expression IapAgentRegistryAgentIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#title IapAgentRegistryAgentIamMember#title}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#description IapAgentRegistryAgentIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#expression IapAgentRegistryAgentIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#title IapAgentRegistryAgentIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#description IapAgentRegistryAgentIamMember#description}.

---

### IapAgentRegistryAgentIamMemberConfig <a name="IapAgentRegistryAgentIamMemberConfig" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  agent_id: str,
  member: str,
  role: str,
  condition: IapAgentRegistryAgentIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#agent_id IapAgentRegistryAgentIamMember#agent_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#member IapAgentRegistryAgentIamMember#member}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#role IapAgentRegistryAgentIamMember#role}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#id IapAgentRegistryAgentIamMember#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#location IapAgentRegistryAgentIamMember#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#project IapAgentRegistryAgentIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#agent_id IapAgentRegistryAgentIamMember#agent_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#member IapAgentRegistryAgentIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#role IapAgentRegistryAgentIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.condition"></a>

```python
condition: IapAgentRegistryAgentIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#condition IapAgentRegistryAgentIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#id IapAgentRegistryAgentIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#location IapAgentRegistryAgentIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_agent_iam_member#project IapAgentRegistryAgentIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAgentRegistryAgentIamMemberConditionOutputReference <a name="IapAgentRegistryAgentIamMemberConditionOutputReference" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_agent_iam_member

iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: IapAgentRegistryAgentIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.iapAgentRegistryAgentIamMember.IapAgentRegistryAgentIamMemberCondition">IapAgentRegistryAgentIamMemberCondition</a>

---



