# `dataGoogleSecretManagerRegionalSecret` Submodule <a name="`dataGoogleSecretManagerRegionalSecret` Submodule" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecret <a name="DataGoogleSecretManagerRegionalSecret" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret(
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
  secret_id: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.location"></a>

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#location DataGoogleSecretManagerRegionalSecret#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.secretId"></a>

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#secret_id DataGoogleSecretManagerRegionalSecret#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleSecretManagerRegionalSecret resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleSecretManagerRegionalSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleSecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.customerManagedEncryption">customer_managed_encryption</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionProtection">deletion_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList">DataGoogleSecretManagerRegionalSecretRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.topics">topics</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList">DataGoogleSecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionAliases">version_aliases</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionDestroyTtl">version_destroy_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `customer_managed_encryption`<sup>Required</sup> <a name="customer_managed_encryption" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```python
customer_managed_encryption: DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.rotation"></a>

```python
rotation: DataGoogleSecretManagerRegionalSecretRotationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList">DataGoogleSecretManagerRegionalSecretRotationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.topics"></a>

```python
topics: DataGoogleSecretManagerRegionalSecretTopicsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList">DataGoogleSecretManagerRegionalSecretTopicsList</a>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionAliases"></a>

```python
version_aliases: StringMap
```

- *Type:* cdktn.StringMap

---

##### `version_destroy_ttl`<sup>Required</sup> <a name="version_destroy_ttl" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```python
version_destroy_ttl: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretConfig <a name="DataGoogleSecretManagerRegionalSecretConfig" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  secret_id: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.location">location</a></code> | <code>str</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.secretId">secret_id</a></code> | <code>str</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#location DataGoogleSecretManagerRegionalSecret#location}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#secret_id DataGoogleSecretManagerRegionalSecret#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}.

---

### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption()
```


### DataGoogleSecretManagerRegionalSecretRotation <a name="DataGoogleSecretManagerRegionalSecretRotation" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation()
```


### DataGoogleSecretManagerRegionalSecretTopics <a name="DataGoogleSecretManagerRegionalSecretTopics" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerRegionalSecretRotationList <a name="DataGoogleSecretManagerRegionalSecretRotationList" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretRotationOutputReference <a name="DataGoogleSecretManagerRegionalSecretRotationOutputReference" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">rotation_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation">DataGoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```python
rotation_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretRotation
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation">DataGoogleSecretManagerRegionalSecretRotation</a>

---


### DataGoogleSecretManagerRegionalSecretTopicsList <a name="DataGoogleSecretManagerRegionalSecretTopicsList" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleSecretManagerRegionalSecretTopicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleSecretManagerRegionalSecretTopicsOutputReference <a name="DataGoogleSecretManagerRegionalSecretTopicsOutputReference" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_secret_manager_regional_secret

dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics">DataGoogleSecretManagerRegionalSecretTopics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleSecretManagerRegionalSecretTopics
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics">DataGoogleSecretManagerRegionalSecretTopics</a>

---



