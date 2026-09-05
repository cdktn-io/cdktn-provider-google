# `ephemeralGoogleServiceAccountKey` Submodule <a name="`ephemeralGoogleServiceAccountKey` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountKey <a name="EphemeralGoogleServiceAccountKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountkey"

ephemeralgoogleserviceaccountkey.NewEphemeralGoogleServiceAccountKey(scope Construct, id *string, config EphemeralGoogleServiceAccountKeyConfig) EphemeralGoogleServiceAccountKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig">EphemeralGoogleServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig">EphemeralGoogleServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey">ResetFetchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType">ResetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData">ResetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType">ResetPublicKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId">ResetServiceAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFetchKey` <a name="ResetFetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey"></a>

```go
func ResetFetchKey()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm"></a>

```go
func ResetKeyAlgorithm()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName"></a>

```go
func ResetName()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyType` <a name="ResetPrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType"></a>

```go
func ResetPrivateKeyType()
```

##### `ResetPublicKeyData` <a name="ResetPublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData"></a>

```go
func ResetPublicKeyData()
```

##### `ResetPublicKeyType` <a name="ResetPublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType"></a>

```go
func ResetPublicKeyType()
```

##### `ResetServiceAccountId` <a name="ResetServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId"></a>

```go
func ResetServiceAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountkey"

ephemeralgoogleserviceaccountkey.EphemeralGoogleServiceAccountKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountkey"

ephemeralgoogleserviceaccountkey.EphemeralGoogleServiceAccountKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountkey"

ephemeralgoogleserviceaccountkey.EphemeralGoogleServiceAccountKey_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput">FetchKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput">PrivateKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput">PublicKeyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput">PublicKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey">FetchKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData">PublicKeyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType">PublicKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FetchKeyInput`<sup>Optional</sup> <a name="FetchKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput"></a>

```go
func FetchKeyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyTypeInput`<sup>Optional</sup> <a name="PrivateKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput"></a>

```go
func PrivateKeyTypeInput() *string
```

- *Type:* *string

---

##### `PublicKeyDataInput`<sup>Optional</sup> <a name="PublicKeyDataInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput"></a>

```go
func PublicKeyDataInput() *string
```

- *Type:* *string

---

##### `PublicKeyTypeInput`<sup>Optional</sup> <a name="PublicKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```go
func PublicKeyTypeInput() *string
```

- *Type:* *string

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput"></a>

```go
func ServiceAccountIdInput() *string
```

- *Type:* *string

---

##### `FetchKey`<sup>Required</sup> <a name="FetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey"></a>

```go
func FetchKey() interface{}
```

- *Type:* interface{}

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType"></a>

```go
func PrivateKeyType() *string
```

- *Type:* *string

---

##### `PublicKeyData`<sup>Required</sup> <a name="PublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData"></a>

```go
func PublicKeyData() *string
```

- *Type:* *string

---

##### `PublicKeyType`<sup>Required</sup> <a name="PublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType"></a>

```go
func PublicKeyType() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountKeyConfig <a name="EphemeralGoogleServiceAccountKeyConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountkey"

&ephemeralgoogleserviceaccountkey.EphemeralGoogleServiceAccountKeyConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	FetchKey: interface{},
	KeyAlgorithm: *string,
	Name: *string,
	PrivateKey: *string,
	PrivateKeyType: *string,
	PublicKeyData: *string,
	PublicKeyType: *string,
	ServiceAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey">FetchKey</a></code> | <code>interface{}</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType">PrivateKeyType</a></code> | <code>*string</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData">PublicKeyData</a></code> | <code>*string</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType">PublicKeyType</a></code> | <code>*string</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | The ID of the parent service account of the key. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `FetchKey`<sup>Optional</sup> <a name="FetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey"></a>

```go
FetchKey interface{}
```

- *Type:* interface{}

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `PrivateKeyType`<sup>Optional</sup> <a name="PrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType"></a>

```go
PrivateKeyType *string
```

- *Type:* *string

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `PublicKeyData`<sup>Optional</sup> <a name="PublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData"></a>

```go
PublicKeyData *string
```

- *Type:* *string

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `PublicKeyType`<sup>Optional</sup> <a name="PublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```go
PublicKeyType *string
```

- *Type:* *string

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `ServiceAccountId`<sup>Optional</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId"></a>

```go
ServiceAccountId *string
```

- *Type:* *string

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---



