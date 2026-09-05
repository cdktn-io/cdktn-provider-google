# `ephemeralGoogleServiceAccountIdToken` Submodule <a name="`ephemeralGoogleServiceAccountIdToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountIdToken <a name="EphemeralGoogleServiceAccountIdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_id_token

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  target_audience: str,
  delegates: typing.List[str] = None,
  include_email: bool | IResolvable = None,
  target_service_account: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetAudience">target_audience</a></code> | <code>str</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.delegates">delegates</a></code> | <code>typing.List[str]</code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.includeEmail">include_email</a></code> | <code>bool \| cdktn.IResolvable</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount">target_service_account</a></code> | <code>str</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `target_audience`<sup>Required</sup> <a name="target_audience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetAudience"></a>

- *Type:* str

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.delegates"></a>

- *Type:* typing.List[str]

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `include_email`<sup>Optional</sup> <a name="include_email" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.includeEmail"></a>

- *Type:* bool | cdktn.IResolvable

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `target_service_account`<sup>Optional</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount"></a>

- *Type:* str

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates">reset_delegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail">reset_include_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount">reset_target_service_account</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_delegates` <a name="reset_delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates"></a>

```python
def reset_delegates() -> None
```

##### `reset_include_email` <a name="reset_include_email" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```python
def reset_include_email() -> None
```

##### `reset_target_service_account` <a name="reset_target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```python
def reset_target_service_account() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_id_token

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_id_token

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_id_token

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken">id_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput">delegates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput">include_email_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput">target_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput">target_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail">include_email</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience">target_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id_token`<sup>Required</sup> <a name="id_token" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken"></a>

```python
id_token: str
```

- *Type:* str

---

##### `delegates_input`<sup>Optional</sup> <a name="delegates_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput"></a>

```python
delegates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_email_input`<sup>Optional</sup> <a name="include_email_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```python
include_email_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `target_audience_input`<sup>Optional</sup> <a name="target_audience_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```python
target_audience_input: str
```

- *Type:* str

---

##### `target_service_account_input`<sup>Optional</sup> <a name="target_service_account_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```python
target_service_account_input: str
```

- *Type:* str

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_email`<sup>Required</sup> <a name="include_email" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail"></a>

```python
include_email: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `target_audience`<sup>Required</sup> <a name="target_audience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience"></a>

```python
target_audience: str
```

- *Type:* str

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountIdTokenConfig <a name="EphemeralGoogleServiceAccountIdTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_id_token

ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  target_audience: str,
  delegates: typing.List[str] = None,
  include_email: bool | IResolvable = None,
  target_service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience">target_audience</a></code> | <code>str</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail">include_email</a></code> | <code>bool \| cdktn.IResolvable</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `target_audience`<sup>Required</sup> <a name="target_audience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```python
target_audience: str
```

- *Type:* str

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `include_email`<sup>Optional</sup> <a name="include_email" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```python
include_email: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `target_service_account`<sup>Optional</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---



