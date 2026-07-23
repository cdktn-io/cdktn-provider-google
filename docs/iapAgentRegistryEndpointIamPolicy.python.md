# `iapAgentRegistryEndpointIamPolicy` Submodule <a name="`iapAgentRegistryEndpointIamPolicy` Submodule" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAgentRegistryEndpointIamPolicy <a name="IapAgentRegistryEndpointIamPolicy" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy google_iap_agent_registry_endpoint_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_endpoint_iam_policy

iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#endpoint_id IapAgentRegistryEndpointIamPolicy#endpoint_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#policy_data IapAgentRegistryEndpointIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#id IapAgentRegistryEndpointIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#location IapAgentRegistryEndpointIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#project IapAgentRegistryEndpointIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#endpoint_id IapAgentRegistryEndpointIamPolicy#endpoint_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#policy_data IapAgentRegistryEndpointIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#id IapAgentRegistryEndpointIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#location IapAgentRegistryEndpointIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#project IapAgentRegistryEndpointIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IapAgentRegistryEndpointIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isConstruct"></a>

```python
from cdktn_provider_google import iap_agent_registry_endpoint_iam_policy

iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import iap_agent_registry_endpoint_iam_policy

iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import iap_agent_registry_endpoint_iam_policy

iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import iap_agent_registry_endpoint_iam_policy

iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IapAgentRegistryEndpointIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IapAgentRegistryEndpointIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IapAgentRegistryEndpointIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IapAgentRegistryEndpointIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapAgentRegistryEndpointIamPolicyConfig <a name="IapAgentRegistryEndpointIamPolicyConfig" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import iap_agent_registry_endpoint_iam_policy

iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_id: str,
  policy_data: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#endpoint_id IapAgentRegistryEndpointIamPolicy#endpoint_id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#policy_data IapAgentRegistryEndpointIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#id IapAgentRegistryEndpointIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#location IapAgentRegistryEndpointIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#project IapAgentRegistryEndpointIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#endpoint_id IapAgentRegistryEndpointIamPolicy#endpoint_id}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#policy_data IapAgentRegistryEndpointIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#id IapAgentRegistryEndpointIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#location IapAgentRegistryEndpointIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.iapAgentRegistryEndpointIamPolicy.IapAgentRegistryEndpointIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/iap_agent_registry_endpoint_iam_policy#project IapAgentRegistryEndpointIamPolicy#project}.

---



