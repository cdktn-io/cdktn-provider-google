# `ephemeralGoogleSecretManagerSecretVersion` Submodule <a name="`ephemeralGoogleSecretManagerSecretVersion` Submodule" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleSecretManagerSecretVersion <a name="EphemeralGoogleSecretManagerSecretVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version google_secret_manager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_secret_manager_secret_version

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  secret: str,
  is_secret_data_base64: bool | IResolvable = None,
  project: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.secret">secret</a></code> | <code>str</code> | The secret to get the secret version for. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.isSecretDataBase64">is_secret_data_base64</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the secret data returned will not get base64 decoded. Defaults to false. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | The project to get the secret version for. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | The version of the secret to get. If it is not provided, the latest version is retrieved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.secret"></a>

- *Type:* str

The secret to get the secret version for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#secret EphemeralGoogleSecretManagerSecretVersion#secret}

---

##### `is_secret_data_base64`<sup>Optional</sup> <a name="is_secret_data_base64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.isSecretDataBase64"></a>

- *Type:* bool | cdktn.IResolvable

If true, the secret data returned will not get base64 decoded. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#is_secret_data_base64 EphemeralGoogleSecretManagerSecretVersion#is_secret_data_base64}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.project"></a>

- *Type:* str

The project to get the secret version for. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#project EphemeralGoogleSecretManagerSecretVersion#project}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.version"></a>

- *Type:* str

The version of the secret to get. If it is not provided, the latest version is retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#version EphemeralGoogleSecretManagerSecretVersion#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64">reset_is_secret_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_is_secret_data_base64` <a name="reset_is_secret_data_base64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64"></a>

```python
def reset_is_secret_data_base64() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct"></a>

```python
from cdktn_provider_google import ephemeral_google_secret_manager_secret_version

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement"></a>

```python
from cdktn_provider_google import ephemeral_google_secret_manager_secret_version

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_google import ephemeral_google_secret_manager_secret_version

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime">destroy_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData">secret_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input">is_secret_data_base64_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64">is_secret_data_base64</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destroy_time`<sup>Required</sup> <a name="destroy_time" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime"></a>

```python
destroy_time: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_data`<sup>Required</sup> <a name="secret_data" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData"></a>

```python
secret_data: str
```

- *Type:* str

---

##### `is_secret_data_base64_input`<sup>Optional</sup> <a name="is_secret_data_base64_input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input"></a>

```python
is_secret_data_base64_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `is_secret_data_base64`<sup>Required</sup> <a name="is_secret_data_base64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64"></a>

```python
is_secret_data_base64: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleSecretManagerSecretVersionConfig <a name="EphemeralGoogleSecretManagerSecretVersionConfig" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_secret_manager_secret_version

ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  secret: str,
  is_secret_data_base64: bool | IResolvable = None,
  project: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret">secret</a></code> | <code>str</code> | The secret to get the secret version for. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64">is_secret_data_base64</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the secret data returned will not get base64 decoded. Defaults to false. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project">project</a></code> | <code>str</code> | The project to get the secret version for. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version">version</a></code> | <code>str</code> | The version of the secret to get. If it is not provided, the latest version is retrieved. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

The secret to get the secret version for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#secret EphemeralGoogleSecretManagerSecretVersion#secret}

---

##### `is_secret_data_base64`<sup>Optional</sup> <a name="is_secret_data_base64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64"></a>

```python
is_secret_data_base64: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the secret data returned will not get base64 decoded. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#is_secret_data_base64 EphemeralGoogleSecretManagerSecretVersion#is_secret_data_base64}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project to get the secret version for. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#project EphemeralGoogleSecretManagerSecretVersion#project}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the secret to get. If it is not provided, the latest version is retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/secret_manager_secret_version#version EphemeralGoogleSecretManagerSecretVersion#version}

---



