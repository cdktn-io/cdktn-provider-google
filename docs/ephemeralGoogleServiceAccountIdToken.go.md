# `ephemeralGoogleServiceAccountIdToken` Submodule <a name="`ephemeralGoogleServiceAccountIdToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountIdToken <a name="EphemeralGoogleServiceAccountIdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountidtoken"

ephemeralgoogleserviceaccountidtoken.NewEphemeralGoogleServiceAccountIdToken(scope Construct, id *string, config EphemeralGoogleServiceAccountIdTokenConfig) EphemeralGoogleServiceAccountIdToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig">EphemeralGoogleServiceAccountIdTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig">EphemeralGoogleServiceAccountIdTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail">ResetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount">ResetTargetServiceAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates"></a>

```go
func ResetDelegates()
```

##### `ResetIncludeEmail` <a name="ResetIncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```go
func ResetIncludeEmail()
```

##### `ResetTargetServiceAccount` <a name="ResetTargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```go
func ResetTargetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountidtoken"

ephemeralgoogleserviceaccountidtoken.EphemeralGoogleServiceAccountIdToken_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountidtoken"

ephemeralgoogleserviceaccountidtoken.EphemeralGoogleServiceAccountIdToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountidtoken"

ephemeralgoogleserviceaccountidtoken.EphemeralGoogleServiceAccountIdToken_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken">IdToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput">DelegatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput">IncludeEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput">TargetAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates">Delegates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail">IncludeEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience">TargetAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken"></a>

```go
func IdToken() *string
```

- *Type:* *string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput"></a>

```go
func DelegatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeEmailInput`<sup>Optional</sup> <a name="IncludeEmailInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```go
func IncludeEmailInput() interface{}
```

- *Type:* interface{}

---

##### `TargetAudienceInput`<sup>Optional</sup> <a name="TargetAudienceInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```go
func TargetAudienceInput() *string
```

- *Type:* *string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```go
func TargetServiceAccountInput() *string
```

- *Type:* *string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates"></a>

```go
func Delegates() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeEmail`<sup>Required</sup> <a name="IncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail"></a>

```go
func IncludeEmail() interface{}
```

- *Type:* interface{}

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience"></a>

```go
func TargetAudience() *string
```

- *Type:* *string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```go
func TargetServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountIdTokenConfig <a name="EphemeralGoogleServiceAccountIdTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/ephemeralgoogleserviceaccountidtoken"

&ephemeralgoogleserviceaccountidtoken.EphemeralGoogleServiceAccountIdTokenConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	TargetAudience: *string,
	Delegates: *[]*string,
	IncludeEmail: interface{},
	TargetServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience">TargetAudience</a></code> | <code>*string</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates">Delegates</a></code> | <code>*[]*string</code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail">IncludeEmail</a></code> | <code>interface{}</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>*string</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `TargetAudience`<sup>Required</sup> <a name="TargetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```go
TargetAudience *string
```

- *Type:* *string

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```go
Delegates *[]*string
```

- *Type:* *[]*string

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `IncludeEmail`<sup>Optional</sup> <a name="IncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```go
IncludeEmail interface{}
```

- *Type:* interface{}

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `TargetServiceAccount`<sup>Optional</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```go
TargetServiceAccount *string
```

- *Type:* *string

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---



