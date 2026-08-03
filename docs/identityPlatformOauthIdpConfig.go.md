# `identityPlatformOauthIdpConfig` Submodule <a name="`identityPlatformOauthIdpConfig` Submodule" id="@cdktn/provider-google.identityPlatformOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformOauthIdpConfig <a name="IdentityPlatformOauthIdpConfig" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config google_identity_platform_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.NewIdentityPlatformOauthIdpConfig(scope Construct, id *string, config IdentityPlatformOauthIdpConfigConfig) IdentityPlatformOauthIdpConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig">IdentityPlatformOauthIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig">IdentityPlatformOauthIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.putResponseType">PutResponseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetResponseType">ResetResponseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResponseType` <a name="PutResponseType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.putResponseType"></a>

```go
func PutResponseType(value IdentityPlatformOauthIdpConfigResponseType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.putResponseType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.putTimeouts"></a>

```go
func PutTimeouts(value IdentityPlatformOauthIdpConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts">IdentityPlatformOauthIdpConfigTimeouts</a>

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResponseType` <a name="ResetResponseType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetResponseType"></a>

```go
func ResetResponseType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IdentityPlatformOauthIdpConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IdentityPlatformOauthIdpConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityPlatformOauthIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityPlatformOauthIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IdentityPlatformOauthIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.responseType">ResponseType</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference">IdentityPlatformOauthIdpConfigResponseTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference">IdentityPlatformOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.responseTypeInput">ResponseTypeInput</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.responseType"></a>

```go
func ResponseType() IdentityPlatformOauthIdpConfigResponseTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference">IdentityPlatformOauthIdpConfigResponseTypeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.timeouts"></a>

```go
func Timeouts() IdentityPlatformOauthIdpConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference">IdentityPlatformOauthIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResponseTypeInput`<sup>Optional</sup> <a name="ResponseTypeInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.responseTypeInput"></a>

```go
func ResponseTypeInput() IdentityPlatformOauthIdpConfigResponseType
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformOauthIdpConfigConfig <a name="IdentityPlatformOauthIdpConfigConfig" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

&identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	Issuer: *string,
	Name: *string,
	ClientSecret: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Enabled: interface{},
	Id: *string,
	Project: *string,
	ResponseType: github.com/cdktn-io/cdktn-provider-google-go/google/v19.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client id of an OAuth client. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.issuer">Issuer</a></code> | <code>*string</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.name">Name</a></code> | <code>*string</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human friendly display name. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#id IdentityPlatformOauthIdpConfig#id}. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#project IdentityPlatformOauthIdpConfig#project}. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.responseType">ResponseType</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a></code> | response_type block. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts">IdentityPlatformOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#client_id IdentityPlatformOauthIdpConfig#client_id}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#issuer IdentityPlatformOauthIdpConfig#issuer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#name IdentityPlatformOauthIdpConfig#name}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#client_secret IdentityPlatformOauthIdpConfig#client_secret}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#deletion_policy IdentityPlatformOauthIdpConfig#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#display_name IdentityPlatformOauthIdpConfig#display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#enabled IdentityPlatformOauthIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#id IdentityPlatformOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#project IdentityPlatformOauthIdpConfig#project}.

---

##### `ResponseType`<sup>Optional</sup> <a name="ResponseType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.responseType"></a>

```go
ResponseType IdentityPlatformOauthIdpConfigResponseType
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a>

response_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#response_type IdentityPlatformOauthIdpConfig#response_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigConfig.property.timeouts"></a>

```go
Timeouts IdentityPlatformOauthIdpConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts">IdentityPlatformOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#timeouts IdentityPlatformOauthIdpConfig#timeouts}

---

### IdentityPlatformOauthIdpConfigResponseType <a name="IdentityPlatformOauthIdpConfigResponseType" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

&identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfigResponseType {
	Code: interface{},
	IdToken: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType.property.code">Code</a></code> | <code>interface{}</code> | If true, authorization code is returned from IdP's authorization endpoint. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType.property.idToken">IdToken</a></code> | <code>interface{}</code> | If true, ID token is returned from IdP's authorization endpoint. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType.property.code"></a>

```go
Code interface{}
```

- *Type:* interface{}

If true, authorization code is returned from IdP's authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#code IdentityPlatformOauthIdpConfig#code}

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType.property.idToken"></a>

```go
IdToken interface{}
```

- *Type:* interface{}

If true, ID token is returned from IdP's authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#id_token IdentityPlatformOauthIdpConfig#id_token}

---

### IdentityPlatformOauthIdpConfigTimeouts <a name="IdentityPlatformOauthIdpConfigTimeouts" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

&identityplatformoauthidpconfig.IdentityPlatformOauthIdpConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#create IdentityPlatformOauthIdpConfig#create}. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#delete IdentityPlatformOauthIdpConfig#delete}. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#update IdentityPlatformOauthIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#create IdentityPlatformOauthIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#delete IdentityPlatformOauthIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/identity_platform_oauth_idp_config#update IdentityPlatformOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformOauthIdpConfigResponseTypeOutputReference <a name="IdentityPlatformOauthIdpConfigResponseTypeOutputReference" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.NewIdentityPlatformOauthIdpConfigResponseTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformOauthIdpConfigResponseTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetCode"></a>

```go
func ResetCode()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetIdToken"></a>

```go
func ResetIdToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.codeInput">CodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.code">Code</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idToken">IdToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.codeInput"></a>

```go
func CodeInput() interface{}
```

- *Type:* interface{}

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() interface{}
```

- *Type:* interface{}

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.code"></a>

```go
func Code() interface{}
```

- *Type:* interface{}

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idToken"></a>

```go
func IdToken() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformOauthIdpConfigResponseType
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigResponseType">IdentityPlatformOauthIdpConfigResponseType</a>

---


### IdentityPlatformOauthIdpConfigTimeoutsOutputReference <a name="IdentityPlatformOauthIdpConfigTimeoutsOutputReference" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/identityplatformoauthidpconfig"

identityplatformoauthidpconfig.NewIdentityPlatformOauthIdpConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformOauthIdpConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.identityPlatformOauthIdpConfig.IdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



