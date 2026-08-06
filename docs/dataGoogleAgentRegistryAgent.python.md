# `dataGoogleAgentRegistryAgent` Submodule <a name="`dataGoogleAgentRegistryAgent` Submodule" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAgentRegistryAgent <a name="DataGoogleAgentRegistryAgent" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent google_agent_registry_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent(
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
  agent_id: str = None,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | The unique identifier for the Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.filter">filter</a></code> | <code>str</code> | A filter string that identifies a unique Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#location DataGoogleAgentRegistryAgent#location}

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.agentId"></a>

- *Type:* str

The unique identifier for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#agent_id DataGoogleAgentRegistryAgent#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.filter"></a>

- *Type:* str

A filter string that identifies a unique Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#filter DataGoogleAgentRegistryAgent#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_agent_id` <a name="reset_agent_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleAgentRegistryAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleAgentRegistryAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleAgentRegistryAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleAgentRegistryAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleAgentRegistryAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.protocols">protocols</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList">DataGoogleAgentRegistryAgentProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList">DataGoogleAgentRegistryAgentSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.protocols"></a>

```python
protocols: DataGoogleAgentRegistryAgentProtocolsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList">DataGoogleAgentRegistryAgentProtocolsList</a>

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.skills"></a>

```python
skills: DataGoogleAgentRegistryAgentSkillsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList">DataGoogleAgentRegistryAgentSkillsList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAgentRegistryAgentConfig <a name="DataGoogleAgentRegistryAgentConfig" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  agent_id: str = None,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.agentId">agent_id</a></code> | <code>str</code> | The unique identifier for the Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.filter">filter</a></code> | <code>str</code> | A filter string that identifies a unique Agent. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#location DataGoogleAgentRegistryAgent#location}

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

The unique identifier for the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#agent_id DataGoogleAgentRegistryAgent#agent_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

A filter string that identifies a unique Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#filter DataGoogleAgentRegistryAgent#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#id DataGoogleAgentRegistryAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/agent_registry_agent#project DataGoogleAgentRegistryAgent#project}.

---

### DataGoogleAgentRegistryAgentProtocols <a name="DataGoogleAgentRegistryAgentProtocols" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols()
```


### DataGoogleAgentRegistryAgentProtocolsInterfaces <a name="DataGoogleAgentRegistryAgentProtocolsInterfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces()
```


### DataGoogleAgentRegistryAgentSkills <a name="DataGoogleAgentRegistryAgentSkills" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAgentRegistryAgentProtocolsInterfacesList <a name="DataGoogleAgentRegistryAgentProtocolsInterfacesList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference <a name="DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.protocolBinding">protocol_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces">DataGoogleAgentRegistryAgentProtocolsInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `protocol_binding`<sup>Required</sup> <a name="protocol_binding" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.protocolBinding"></a>

```python
protocol_binding: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAgentRegistryAgentProtocolsInterfaces
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfaces">DataGoogleAgentRegistryAgentProtocolsInterfaces</a>

---


### DataGoogleAgentRegistryAgentProtocolsList <a name="DataGoogleAgentRegistryAgentProtocolsList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAgentRegistryAgentProtocolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAgentRegistryAgentProtocolsOutputReference <a name="DataGoogleAgentRegistryAgentProtocolsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.interfaces">interfaces</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList">DataGoogleAgentRegistryAgentProtocolsInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols">DataGoogleAgentRegistryAgentProtocols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interfaces`<sup>Required</sup> <a name="interfaces" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.interfaces"></a>

```python
interfaces: DataGoogleAgentRegistryAgentProtocolsInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsInterfacesList">DataGoogleAgentRegistryAgentProtocolsInterfacesList</a>

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocolsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAgentRegistryAgentProtocols
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentProtocols">DataGoogleAgentRegistryAgentProtocols</a>

---


### DataGoogleAgentRegistryAgentSkillsList <a name="DataGoogleAgentRegistryAgentSkillsList" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleAgentRegistryAgentSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleAgentRegistryAgentSkillsOutputReference <a name="DataGoogleAgentRegistryAgentSkillsOutputReference" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_agent_registry_agent

dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.examples">examples</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills">DataGoogleAgentRegistryAgentSkills</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.examples"></a>

```python
examples: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkillsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleAgentRegistryAgentSkills
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleAgentRegistryAgent.DataGoogleAgentRegistryAgentSkills">DataGoogleAgentRegistryAgentSkills</a>

---



