# `cloudIdentityInboundOidcSsoProfile` Submodule <a name="`cloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundOidcSsoProfile <a name="CloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.NewCloudIdentityInboundOidcSsoProfile(scope Construct, id *string, config CloudIdentityInboundOidcSsoProfileConfig) CloudIdentityInboundOidcSsoProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig">CloudIdentityInboundOidcSsoProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig">CloudIdentityInboundOidcSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig">PutRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer">ResetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig">ResetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```go
func PutIdpConfig(value CloudIdentityInboundOidcSsoProfileIdpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `PutRpConfig` <a name="PutRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```go
func PutRpConfig(value CloudIdentityInboundOidcSsoProfileRpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```go
func PutTimeouts(value CloudIdentityInboundOidcSsoProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `ResetCustomer` <a name="ResetCustomer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```go
func ResetCustomer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetRpConfig` <a name="ResetRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```go
func ResetRpConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudIdentityInboundOidcSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">InboundOidcSsoProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput">CustomerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput">RpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer">Customer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```go
func IdpConfig() CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `InboundOidcSsoProfileId`<sup>Required</sup> <a name="InboundOidcSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```go
func InboundOidcSsoProfileId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RpConfig`<sup>Required</sup> <a name="RpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```go
func RpConfig() CloudIdentityInboundOidcSsoProfileRpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```go
func Timeouts() CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `CustomerInput`<sup>Optional</sup> <a name="CustomerInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```go
func CustomerInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```go
func IdpConfigInput() CloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `RpConfigInput`<sup>Optional</sup> <a name="RpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```go
func RpConfigInput() CloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer"></a>

```go
func Customer() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundOidcSsoProfileConfig <a name="CloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

&cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdpConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig,
	Customer: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	RpConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v22.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer">Customer</a></code> | <code>*string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```go
IdpConfig CloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `Customer`<sup>Optional</sup> <a name="Customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```go
Customer *string
```

- *Type:* *string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RpConfig`<sup>Optional</sup> <a name="RpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```go
RpConfig CloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```go
Timeouts CloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

### CloudIdentityInboundOidcSsoProfileIdpConfig <a name="CloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

&cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfileIdpConfig {
	IssuerUri: *string,
	ChangePasswordUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">ChangePasswordUri</a></code> | <code>*string</code> | The **Change Password URL** of the identity provider. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```go
IssuerUri *string
```

- *Type:* *string

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#issuer_uri CloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `ChangePasswordUri`<sup>Optional</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```go
ChangePasswordUri *string
```

- *Type:* *string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#change_password_uri CloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### CloudIdentityInboundOidcSsoProfileRpConfig <a name="CloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

&cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfileRpConfig {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_id CloudIdentityInboundOidcSsoProfile#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_secret CloudIdentityInboundOidcSsoProfile#client_secret}

---

### CloudIdentityInboundOidcSsoProfileTimeouts <a name="CloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

&cloudidentityinboundoidcssoprofile.CloudIdentityInboundOidcSsoProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.NewCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">ResetChangePasswordUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangePasswordUri` <a name="ResetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```go
func ResetChangePasswordUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">ChangePasswordUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">ChangePasswordUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangePasswordUriInput`<sup>Optional</sup> <a name="ChangePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```go
func ChangePasswordUriInput() *string
```

- *Type:* *string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```go
func IssuerUriInput() *string
```

- *Type:* *string

---

##### `ChangePasswordUri`<sup>Required</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```go
func ChangePasswordUri() *string
```

- *Type:* *string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.NewCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudIdentityInboundOidcSsoProfileRpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/cloudidentityinboundoidcssoprofile"

cloudidentityinboundoidcssoprofile.NewCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



