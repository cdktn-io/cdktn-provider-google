# `networkSecuritySecurityProfile` Submodule <a name="`networkSecuritySecurityProfile` Submodule" id="@cdktn/provider-google.networkSecuritySecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecuritySecurityProfile <a name="NetworkSecuritySecurityProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile google_network_security_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfile(scope Construct, id *string, config NetworkSecuritySecurityProfileConfig) NetworkSecuritySecurityProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig">NetworkSecuritySecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig">NetworkSecuritySecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile">PutCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile">PutCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile">PutThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putUrlFilteringProfile">PutUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomInterceptProfile">ResetCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomMirroringProfile">ResetCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile">ResetThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetUrlFilteringProfile">ResetUrlFilteringProfile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomInterceptProfile` <a name="PutCustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile"></a>

```go
func PutCustomInterceptProfile(value NetworkSecuritySecurityProfileCustomInterceptProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomInterceptProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `PutCustomMirroringProfile` <a name="PutCustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile"></a>

```go
func PutCustomMirroringProfile(value NetworkSecuritySecurityProfileCustomMirroringProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putCustomMirroringProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `PutThreatPreventionProfile` <a name="PutThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile"></a>

```go
func PutThreatPreventionProfile(value NetworkSecuritySecurityProfileThreatPreventionProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putThreatPreventionProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecuritySecurityProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

---

##### `PutUrlFilteringProfile` <a name="PutUrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putUrlFilteringProfile"></a>

```go
func PutUrlFilteringProfile(value NetworkSecuritySecurityProfileUrlFilteringProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.putUrlFilteringProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

---

##### `ResetCustomInterceptProfile` <a name="ResetCustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomInterceptProfile"></a>

```go
func ResetCustomInterceptProfile()
```

##### `ResetCustomMirroringProfile` <a name="ResetCustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetCustomMirroringProfile"></a>

```go
func ResetCustomMirroringProfile()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetParent"></a>

```go
func ResetParent()
```

##### `ResetThreatPreventionProfile` <a name="ResetThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetThreatPreventionProfile"></a>

```go
func ResetThreatPreventionProfile()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUrlFilteringProfile` <a name="ResetUrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.resetUrlFilteringProfile"></a>

```go
func ResetUrlFilteringProfile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NetworkSecuritySecurityProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NetworkSecuritySecurityProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NetworkSecuritySecurityProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NetworkSecuritySecurityProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkSecuritySecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecuritySecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecuritySecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecuritySecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfile">CustomInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfile">CustomMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile">ThreatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfile">UrlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference">NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfileInput">CustomInterceptProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfileInput">CustomMirroringProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput">ThreatPreventionProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfileInput">UrlFilteringProfileInput</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CustomInterceptProfile`<sup>Required</sup> <a name="CustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfile"></a>

```go
func CustomInterceptProfile() NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference">NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference</a>

---

##### `CustomMirroringProfile`<sup>Required</sup> <a name="CustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfile"></a>

```go
func CustomMirroringProfile() NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference">NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ThreatPreventionProfile`<sup>Required</sup> <a name="ThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfile"></a>

```go
func ThreatPreventionProfile() NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference">NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeouts"></a>

```go
func Timeouts() NetworkSecuritySecurityProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference">NetworkSecuritySecurityProfileTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UrlFilteringProfile`<sup>Required</sup> <a name="UrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfile"></a>

```go
func UrlFilteringProfile() NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference">NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference</a>

---

##### `CustomInterceptProfileInput`<sup>Optional</sup> <a name="CustomInterceptProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customInterceptProfileInput"></a>

```go
func CustomInterceptProfileInput() NetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---

##### `CustomMirroringProfileInput`<sup>Optional</sup> <a name="CustomMirroringProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.customMirroringProfileInput"></a>

```go
func CustomMirroringProfileInput() NetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `ThreatPreventionProfileInput`<sup>Optional</sup> <a name="ThreatPreventionProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.threatPreventionProfileInput"></a>

```go
func ThreatPreventionProfileInput() NetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrlFilteringProfileInput`<sup>Optional</sup> <a name="UrlFilteringProfileInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.urlFilteringProfileInput"></a>

```go
func UrlFilteringProfileInput() NetworkSecuritySecurityProfileUrlFilteringProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecuritySecurityProfileConfig <a name="NetworkSecuritySecurityProfileConfig" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	CustomInterceptProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile,
	CustomMirroringProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Parent: *string,
	ThreatPreventionProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts,
	UrlFilteringProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v19.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name">Name</a></code> | <code>*string</code> | The name of the security profile resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type">Type</a></code> | <code>*string</code> | The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customInterceptProfile">CustomInterceptProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | custom_intercept_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customMirroringProfile">CustomMirroringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | custom_mirroring_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of the security profile. The Max length is 512 characters. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location">Location</a></code> | <code>*string</code> | The location of the security profile. The default value is 'global'. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent">Parent</a></code> | <code>*string</code> | The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile">ThreatPreventionProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | threat_prevention_profile block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.urlFilteringProfile">UrlFilteringProfile</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | url_filtering_profile block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the security profile resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#name NetworkSecuritySecurityProfile#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of security profile. Possible values: ["THREAT_PREVENTION", "URL_FILTERING", "CUSTOM_MIRRORING", "CUSTOM_INTERCEPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#type NetworkSecuritySecurityProfile#type}

---

##### `CustomInterceptProfile`<sup>Optional</sup> <a name="CustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customInterceptProfile"></a>

```go
CustomInterceptProfile NetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

custom_intercept_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#custom_intercept_profile NetworkSecuritySecurityProfile#custom_intercept_profile}

---

##### `CustomMirroringProfile`<sup>Optional</sup> <a name="CustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.customMirroringProfile"></a>

```go
CustomMirroringProfile NetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

custom_mirroring_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#custom_mirroring_profile NetworkSecuritySecurityProfile#custom_mirroring_profile}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#deletion_policy NetworkSecuritySecurityProfile#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of the security profile. The Max length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#description NetworkSecuritySecurityProfile#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#id NetworkSecuritySecurityProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#labels NetworkSecuritySecurityProfile#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the security profile. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#location NetworkSecuritySecurityProfile#location}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The name of the parent this security profile belongs to. Format: 'organizations/{organization_id}' or 'projects/{project_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#parent NetworkSecuritySecurityProfile#parent}

---

##### `ThreatPreventionProfile`<sup>Optional</sup> <a name="ThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.threatPreventionProfile"></a>

```go
ThreatPreventionProfile NetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

threat_prevention_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#threat_prevention_profile NetworkSecuritySecurityProfile#threat_prevention_profile}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.timeouts"></a>

```go
Timeouts NetworkSecuritySecurityProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts">NetworkSecuritySecurityProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#timeouts NetworkSecuritySecurityProfile#timeouts}

---

##### `UrlFilteringProfile`<sup>Optional</sup> <a name="UrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileConfig.property.urlFilteringProfile"></a>

```go
UrlFilteringProfile NetworkSecuritySecurityProfileUrlFilteringProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

url_filtering_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#url_filtering_profile NetworkSecuritySecurityProfile#url_filtering_profile}

---

### NetworkSecuritySecurityProfileCustomInterceptProfile <a name="NetworkSecuritySecurityProfileCustomInterceptProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileCustomInterceptProfile {
	InterceptEndpointGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup">InterceptEndpointGroup</a></code> | <code>*string</code> | The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}. |

---

##### `InterceptEndpointGroup`<sup>Required</sup> <a name="InterceptEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile.property.interceptEndpointGroup"></a>

```go
InterceptEndpointGroup *string
```

- *Type:* *string

The Intercept Endpoint Group to which matching traffic should be intercepted. Format: projects/{project_id}/locations/global/interceptEndpointGroups/{endpoint_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#intercept_endpoint_group NetworkSecuritySecurityProfile#intercept_endpoint_group}

---

### NetworkSecuritySecurityProfileCustomMirroringProfile <a name="NetworkSecuritySecurityProfileCustomMirroringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileCustomMirroringProfile {
	MirroringEndpointGroup: *string,
	MirroringDeploymentGroups: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | The target Mirroring Endpoint Group. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringDeploymentGroups">MirroringDeploymentGroups</a></code> | <code>*[]*string</code> | The target downstream Mirroring Deployment Groups. |

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringEndpointGroup"></a>

```go
MirroringEndpointGroup *string
```

- *Type:* *string

The target Mirroring Endpoint Group.

When a mirroring rule with this security profile attached matches a packet,
a replica will be mirrored to the location-local target in this group.
Format: projects/{project_id}/locations/global/mirroringEndpointGroups/{endpoint_group_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#mirroring_endpoint_group NetworkSecuritySecurityProfile#mirroring_endpoint_group}

---

##### `MirroringDeploymentGroups`<sup>Optional</sup> <a name="MirroringDeploymentGroups" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile.property.mirroringDeploymentGroups"></a>

```go
MirroringDeploymentGroups *[]*string
```

- *Type:* *[]*string

The target downstream Mirroring Deployment Groups.

This field is used for Packet Broker mirroring endpoint groups to specify
the deployment groups that the packet should be mirrored to by the broker.
Format: projects/{project_id}/locations/global/mirroringDeploymentGroups/{deployment_group_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#mirroring_deployment_groups NetworkSecuritySecurityProfile#mirroring_deployment_groups}

---

### NetworkSecuritySecurityProfileThreatPreventionProfile <a name="NetworkSecuritySecurityProfileThreatPreventionProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileThreatPreventionProfile {
	AntivirusOverrides: interface{},
	SeverityOverrides: interface{},
	ThreatOverrides: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides">AntivirusOverrides</a></code> | <code>interface{}</code> | antivirus_overrides block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides">SeverityOverrides</a></code> | <code>interface{}</code> | severity_overrides block. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides">ThreatOverrides</a></code> | <code>interface{}</code> | threat_overrides block. |

---

##### `AntivirusOverrides`<sup>Optional</sup> <a name="AntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.antivirusOverrides"></a>

```go
AntivirusOverrides interface{}
```

- *Type:* interface{}

antivirus_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#antivirus_overrides NetworkSecuritySecurityProfile#antivirus_overrides}

---

##### `SeverityOverrides`<sup>Optional</sup> <a name="SeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.severityOverrides"></a>

```go
SeverityOverrides interface{}
```

- *Type:* interface{}

severity_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#severity_overrides NetworkSecuritySecurityProfile#severity_overrides}

---

##### `ThreatOverrides`<sup>Optional</sup> <a name="ThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile.property.threatOverrides"></a>

```go
ThreatOverrides interface{}
```

- *Type:* interface{}

threat_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#threat_overrides NetworkSecuritySecurityProfile#threat_overrides}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides {
	Action: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action">Action</a></code> | <code>*string</code> | Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol">Protocol</a></code> | <code>*string</code> | Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"]. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.action"></a>

```go
Action *string
```

- *Type:* *string

Threat action override. For some threat types, only a subset of actions applies. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverrides.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Required protocol to match. Possible values: ["SMTP", "SMB", "POP3", "IMAP", "HTTP2", "HTTP", "FTP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#protocol NetworkSecuritySecurityProfile#protocol}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides {
	Action: *string,
	Severity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action">Action</a></code> | <code>*string</code> | Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity">Severity</a></code> | <code>*string</code> | Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"]. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.action"></a>

```go
Action *string
```

- *Type:* *string

Threat action override. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverrides.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Severity level to match. Possible values: ["CRITICAL", "HIGH", "INFORMATIONAL", "LOW", "MEDIUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#severity NetworkSecuritySecurityProfile#severity}

---

### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides {
	Action: *string,
	ThreatId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action">Action</a></code> | <code>*string</code> | Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId">ThreatId</a></code> | <code>*string</code> | Vendor-specific ID of a threat to override. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.action"></a>

```go
Action *string
```

- *Type:* *string

Threat action. Possible values: ["ALERT", "ALLOW", "DEFAULT_ACTION", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#action NetworkSecuritySecurityProfile#action}

---

##### `ThreatId`<sup>Required</sup> <a name="ThreatId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverrides.property.threatId"></a>

```go
ThreatId *string
```

- *Type:* *string

Vendor-specific ID of a threat to override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#threat_id NetworkSecuritySecurityProfile#threat_id}

---

### NetworkSecuritySecurityProfileTimeouts <a name="NetworkSecuritySecurityProfileTimeouts" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#create NetworkSecuritySecurityProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#delete NetworkSecuritySecurityProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#update NetworkSecuritySecurityProfile#update}.

---

### NetworkSecuritySecurityProfileUrlFilteringProfile <a name="NetworkSecuritySecurityProfileUrlFilteringProfile" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileUrlFilteringProfile {
	UrlFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile.property.urlFilters">UrlFilters</a></code> | <code>interface{}</code> | url_filters block. |

---

##### `UrlFilters`<sup>Optional</sup> <a name="UrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile.property.urlFilters"></a>

```go
UrlFilters interface{}
```

- *Type:* interface{}

url_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#url_filters NetworkSecuritySecurityProfile#url_filters}

---

### NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters <a name="NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

&networksecuritysecurityprofile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters {
	FilteringAction: *string,
	Priority: *f64,
	Urls: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.filteringAction">FilteringAction</a></code> | <code>*string</code> | The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.priority">Priority</a></code> | <code>*f64</code> | The priority of the filter within the URL filtering profile. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.urls">Urls</a></code> | <code>*[]*string</code> | A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable. |

---

##### `FilteringAction`<sup>Required</sup> <a name="FilteringAction" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.filteringAction"></a>

```go
FilteringAction *string
```

- *Type:* *string

The action to take when the filter is applied. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#filtering_action NetworkSecuritySecurityProfile#filtering_action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of the filter within the URL filtering profile.

Must be an integer from 0 and 2147483647, inclusive. Lower integers indicate higher priorities.
The priority of a filter must be unique within a URL filtering profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#priority NetworkSecuritySecurityProfile#priority}

---

##### `Urls`<sup>Optional</sup> <a name="Urls" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFilters.property.urls"></a>

```go
Urls *[]*string
```

- *Type:* *[]*string

A list of domain matcher strings that a domain name gets compared with to determine if the filter is applicable.

A domain name must match with at least one of the strings in the list for a filter to be applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/network_security_security_profile#urls NetworkSecuritySecurityProfile#urls}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference <a name="NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileCustomInterceptProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput">InterceptEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup">InterceptEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InterceptEndpointGroupInput`<sup>Optional</sup> <a name="InterceptEndpointGroupInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroupInput"></a>

```go
func InterceptEndpointGroupInput() *string
```

- *Type:* *string

---

##### `InterceptEndpointGroup`<sup>Required</sup> <a name="InterceptEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.interceptEndpointGroup"></a>

```go
func InterceptEndpointGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecuritySecurityProfileCustomInterceptProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomInterceptProfile">NetworkSecuritySecurityProfileCustomInterceptProfile</a>

---


### NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference <a name="NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileCustomMirroringProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resetMirroringDeploymentGroups">ResetMirroringDeploymentGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMirroringDeploymentGroups` <a name="ResetMirroringDeploymentGroups" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.resetMirroringDeploymentGroups"></a>

```go
func ResetMirroringDeploymentGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupType">MirroringEndpointGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroupsInput">MirroringDeploymentGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput">MirroringEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroups">MirroringDeploymentGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupType`<sup>Required</sup> <a name="MirroringEndpointGroupType" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupType"></a>

```go
func MirroringEndpointGroupType() *string
```

- *Type:* *string

---

##### `MirroringDeploymentGroupsInput`<sup>Optional</sup> <a name="MirroringDeploymentGroupsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroupsInput"></a>

```go
func MirroringDeploymentGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MirroringEndpointGroupInput`<sup>Optional</sup> <a name="MirroringEndpointGroupInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroupInput"></a>

```go
func MirroringEndpointGroupInput() *string
```

- *Type:* *string

---

##### `MirroringDeploymentGroups`<sup>Required</sup> <a name="MirroringDeploymentGroups" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringDeploymentGroups"></a>

```go
func MirroringDeploymentGroups() *[]*string
```

- *Type:* *[]*string

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.mirroringEndpointGroup"></a>

```go
func MirroringEndpointGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecuritySecurityProfileCustomMirroringProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileCustomMirroringProfile">NetworkSecuritySecurityProfileCustomMirroringProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get"></a>

```go
func Get(index *f64) NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides">PutAntivirusOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides">PutSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides">PutThreatOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides">ResetAntivirusOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides">ResetSeverityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides">ResetThreatOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAntivirusOverrides` <a name="PutAntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides"></a>

```go
func PutAntivirusOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putAntivirusOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSeverityOverrides` <a name="PutSeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides"></a>

```go
func PutSeverityOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putSeverityOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThreatOverrides` <a name="PutThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides"></a>

```go
func PutThreatOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.putThreatOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAntivirusOverrides` <a name="ResetAntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetAntivirusOverrides"></a>

```go
func ResetAntivirusOverrides()
```

##### `ResetSeverityOverrides` <a name="ResetSeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetSeverityOverrides"></a>

```go
func ResetSeverityOverrides()
```

##### `ResetThreatOverrides` <a name="ResetThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.resetThreatOverrides"></a>

```go
func ResetThreatOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides">AntivirusOverrides</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides">SeverityOverrides</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides">ThreatOverrides</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput">AntivirusOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput">SeverityOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput">ThreatOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AntivirusOverrides`<sup>Required</sup> <a name="AntivirusOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverrides"></a>

```go
func AntivirusOverrides() NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileAntivirusOverridesList</a>

---

##### `SeverityOverrides`<sup>Required</sup> <a name="SeverityOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverrides"></a>

```go
func SeverityOverrides() NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList</a>

---

##### `ThreatOverrides`<sup>Required</sup> <a name="ThreatOverrides" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverrides"></a>

```go
func ThreatOverrides() NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList">NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList</a>

---

##### `AntivirusOverridesInput`<sup>Optional</sup> <a name="AntivirusOverridesInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.antivirusOverridesInput"></a>

```go
func AntivirusOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityOverridesInput`<sup>Optional</sup> <a name="SeverityOverridesInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.severityOverridesInput"></a>

```go
func SeverityOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ThreatOverridesInput`<sup>Optional</sup> <a name="ThreatOverridesInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.threatOverridesInput"></a>

```go
func ThreatOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecuritySecurityProfileThreatPreventionProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfile">NetworkSecuritySecurityProfileThreatPreventionProfile</a>

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get"></a>

```go
func Get(index *f64) NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileSeverityOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get"></a>

```go
func Get(index *f64) NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference <a name="NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput">ThreatIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId">ThreatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ThreatIdInput`<sup>Optional</sup> <a name="ThreatIdInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatIdInput"></a>

```go
func ThreatIdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ThreatId`<sup>Required</sup> <a name="ThreatId" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.threatId"></a>

```go
func ThreatId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileThreatPreventionProfileThreatOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileTimeoutsOutputReference <a name="NetworkSecuritySecurityProfileTimeoutsOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecuritySecurityProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference <a name="NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileUrlFilteringProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters">PutUrlFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resetUrlFilters">ResetUrlFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUrlFilters` <a name="PutUrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters"></a>

```go
func PutUrlFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.putUrlFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUrlFilters` <a name="ResetUrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.resetUrlFilters"></a>

```go
func ResetUrlFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFilters">UrlFilters</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFiltersInput">UrlFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrlFilters`<sup>Required</sup> <a name="UrlFilters" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFilters"></a>

```go
func UrlFilters() NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList">NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList</a>

---

##### `UrlFiltersInput`<sup>Optional</sup> <a name="UrlFiltersInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.urlFiltersInput"></a>

```go
func UrlFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkSecuritySecurityProfileUrlFilteringProfile
```

- *Type:* <a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfile">NetworkSecuritySecurityProfileUrlFilteringProfile</a>

---


### NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList <a name="NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get"></a>

```go
func Get(index *f64) NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference <a name="NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/networksecuritysecurityprofile"

networksecuritysecurityprofile.NewNetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resetUrls">ResetUrls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUrls` <a name="ResetUrls" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.resetUrls"></a>

```go
func ResetUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringActionInput">FilteringActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urlsInput">UrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringAction">FilteringAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urls">Urls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilteringActionInput`<sup>Optional</sup> <a name="FilteringActionInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringActionInput"></a>

```go
func FilteringActionInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `UrlsInput`<sup>Optional</sup> <a name="UrlsInput" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urlsInput"></a>

```go
func UrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilteringAction`<sup>Required</sup> <a name="FilteringAction" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.filteringAction"></a>

```go
func FilteringAction() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.urls"></a>

```go
func Urls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.networkSecuritySecurityProfile.NetworkSecuritySecurityProfileUrlFilteringProfileUrlFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



