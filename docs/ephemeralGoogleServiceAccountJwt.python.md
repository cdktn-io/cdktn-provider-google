# `ephemeralGoogleServiceAccountJwt` Submodule <a name="`ephemeralGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountJwt <a name="EphemeralGoogleServiceAccountJwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_jwt

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  payload: str,
  target_service_account: str,
  delegates: typing.List[str] = None,
  expires_in: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.payload">payload</a></code> | <code>str</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.targetServiceAccount">target_service_account</a></code> | <code>str</code> | The email of the service account that will sign the JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.delegates">delegates</a></code> | <code>typing.List[str]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.expiresIn">expires_in</a></code> | <code>typing.Union[int, float]</code> | Number of seconds until the JWT expires. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.payload"></a>

- *Type:* str

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.targetServiceAccount"></a>

- *Type:* str

The email of the service account that will sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.delegates"></a>

- *Type:* typing.List[str]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}

---

##### `expires_in`<sup>Optional</sup> <a name="expires_in" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.expiresIn"></a>

- *Type:* typing.Union[int, float]

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates">reset_delegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn">reset_expires_in</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_delegates` <a name="reset_delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates"></a>

```python
def reset_delegates() -> None
```

##### `reset_expires_in` <a name="reset_expires_in" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn"></a>

```python
def reset_expires_in() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_jwt

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_jwt

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_jwt

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt">jwt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput">delegates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput">expires_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput">target_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn">expires_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt"></a>

```python
jwt: str
```

- *Type:* str

---

##### `delegates_input`<sup>Optional</sup> <a name="delegates_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput"></a>

```python
delegates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expires_in_input`<sup>Optional</sup> <a name="expires_in_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput"></a>

```python
expires_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `target_service_account_input`<sup>Optional</sup> <a name="target_service_account_input" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```python
target_service_account_input: str
```

- *Type:* str

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expires_in`<sup>Required</sup> <a name="expires_in" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn"></a>

```python
expires_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountJwtConfig <a name="EphemeralGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.Initializer"></a>

```python
from cdktn_provider_google import ephemeral_google_service_account_jwt

ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  payload: str,
  target_service_account: str,
  delegates: typing.List[str] = None,
  expires_in: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload">payload</a></code> | <code>str</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount">target_service_account</a></code> | <code>str</code> | The email of the service account that will sign the JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates">delegates</a></code> | <code>typing.List[str]</code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn">expires_in</a></code> | <code>typing.Union[int, float]</code> | Number of seconds until the JWT expires. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload"></a>

```python
payload: str
```

- *Type:* str

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}

---

##### `target_service_account`<sup>Required</sup> <a name="target_service_account" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```python
target_service_account: str
```

- *Type:* str

The email of the service account that will sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates"></a>

```python
delegates: typing.List[str]
```

- *Type:* typing.List[str]

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}

---

##### `expires_in`<sup>Optional</sup> <a name="expires_in" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```python
expires_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}

---



