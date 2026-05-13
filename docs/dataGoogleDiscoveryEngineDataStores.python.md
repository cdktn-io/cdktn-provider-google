# `dataGoogleDiscoveryEngineDataStores` Submodule <a name="`dataGoogleDiscoveryEngineDataStores` Submodule" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineDataStores <a name="DataGoogleDiscoveryEngineDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores google_discovery_engine_data_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#location DataGoogleDiscoveryEngineDataStores#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#project DataGoogleDiscoveryEngineDataStores#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleDiscoveryEngineDataStores to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleDiscoveryEngineDataStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineDataStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores">data_stores</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_stores`<sup>Required</sup> <a name="data_stores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.dataStores"></a>

```python
data_stores: DataGoogleDiscoveryEngineDataStoresDataStoresList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList">DataGoogleDiscoveryEngineDataStoresDataStoresList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStores.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineDataStoresConfig <a name="DataGoogleDiscoveryEngineDataStoresConfig" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#id DataGoogleDiscoveryEngineDataStores#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data stores reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#location DataGoogleDiscoveryEngineDataStores#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/discovery_engine_data_stores#project DataGoogleDiscoveryEngineDataStores#project}

---

### DataGoogleDiscoveryEngineDataStoresDataStores <a name="DataGoogleDiscoveryEngineDataStoresDataStores" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores.Initializer"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDiscoveryEngineDataStoresDataStoresList <a name="DataGoogleDiscoveryEngineDataStoresDataStoresList" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference <a name="DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_discovery_engine_data_stores

dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig">content_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId">data_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId">default_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

---

##### `default_schema_id`<sup>Required</sup> <a name="default_schema_id" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.defaultSchemaId"></a>

```python
default_schema_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `solution_types`<sup>Required</sup> <a name="solution_types" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStoresOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleDiscoveryEngineDataStoresDataStores
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDiscoveryEngineDataStores.DataGoogleDiscoveryEngineDataStoresDataStores">DataGoogleDiscoveryEngineDataStoresDataStores</a>

---



