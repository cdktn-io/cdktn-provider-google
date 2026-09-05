# `computeReservation` Submodule <a name="`computeReservation` Submodule" id="@cdktn/provider-google.computeReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeReservation <a name="ComputeReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation google_compute_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservation(scope Construct, id *string, config ComputeReservationConfig) ComputeReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig">ComputeReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.computeReservation.ComputeReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig">ComputeReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration">PutDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy">PutReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAfterDuration">ResetDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAtTime">ResetDeleteAtTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetReservationSharingPolicy">ResetReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetSpecificReservationRequired">ResetSpecificReservationRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.computeReservation.ComputeReservation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeReservation.ComputeReservation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.computeReservation.ComputeReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.computeReservation.ComputeReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.computeReservation.ComputeReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.computeReservation.ComputeReservation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeReservation.ComputeReservation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeleteAfterDuration` <a name="PutDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration"></a>

```go
func PutDeleteAfterDuration(value ComputeReservationDeleteAfterDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putDeleteAfterDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google.computeReservation.ComputeReservation.putParams"></a>

```go
func PutParams(value ComputeReservationParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---

##### `PutReservationSharingPolicy` <a name="PutReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy"></a>

```go
func PutReservationSharingPolicy(value ComputeReservationReservationSharingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putReservationSharingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings"></a>

```go
func PutShareSettings(value ComputeReservationShareSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation"></a>

```go
func PutSpecificReservation(value ComputeReservationSpecificReservation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts"></a>

```go
func PutTimeouts(value ComputeReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

---

##### `ResetDeleteAfterDuration` <a name="ResetDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAfterDuration"></a>

```go
func ResetDeleteAfterDuration()
```

##### `ResetDeleteAtTime` <a name="ResetDeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeleteAtTime"></a>

```go
func ResetDeleteAtTime()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetParams"></a>

```go
func ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReservationSharingPolicy` <a name="ResetReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetReservationSharingPolicy"></a>

```go
func ResetReservationSharingPolicy()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetShareSettings"></a>

```go
func ResetShareSettings()
```

##### `ResetSpecificReservationRequired` <a name="ResetSpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetSpecificReservationRequired"></a>

```go
func ResetSpecificReservationRequired()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.ComputeReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeReservation.ComputeReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.ComputeReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.ComputeReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeReservation.ComputeReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.ComputeReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComputeReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComputeReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.blockNames">BlockNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.commitment">Commitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDuration">DeleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference">ComputeReservationDeleteAfterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.linkedCommitments">LinkedCommitments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference">ComputeReservationParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationBlockCount">ReservationBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicy">ReservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference">ComputeReservationReservationSharingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.resourceStatus">ResourceStatus</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList">ComputeReservationResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference">ComputeReservationShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference">ComputeReservationSpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference">ComputeReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDurationInput">DeleteAfterDurationInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTimeInput">DeleteAtTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicyInput">ReservationSharingPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequiredInput">SpecificReservationRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTime">DeleteAtTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockNames`<sup>Required</sup> <a name="BlockNames" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.blockNames"></a>

```go
func BlockNames() *[]*string
```

- *Type:* *[]*string

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.commitment"></a>

```go
func Commitment() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DeleteAfterDuration`<sup>Required</sup> <a name="DeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDuration"></a>

```go
func DeleteAfterDuration() ComputeReservationDeleteAfterDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference">ComputeReservationDeleteAfterDurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LinkedCommitments`<sup>Required</sup> <a name="LinkedCommitments" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.linkedCommitments"></a>

```go
func LinkedCommitments() *[]*string
```

- *Type:* *[]*string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.params"></a>

```go
func Params() ComputeReservationParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference">ComputeReservationParamsOutputReference</a>

---

##### `ReservationBlockCount`<sup>Required</sup> <a name="ReservationBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationBlockCount"></a>

```go
func ReservationBlockCount() *f64
```

- *Type:* *f64

---

##### `ReservationSharingPolicy`<sup>Required</sup> <a name="ReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicy"></a>

```go
func ReservationSharingPolicy() ComputeReservationReservationSharingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference">ComputeReservationReservationSharingPolicyOutputReference</a>

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.resourceStatus"></a>

```go
func ResourceStatus() ComputeReservationResourceStatusList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList">ComputeReservationResourceStatusList</a>

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettings"></a>

```go
func ShareSettings() ComputeReservationShareSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference">ComputeReservationShareSettingsOutputReference</a>

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservation"></a>

```go
func SpecificReservation() ComputeReservationSpecificReservationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference">ComputeReservationSpecificReservationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.timeouts"></a>

```go
func Timeouts() ComputeReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference">ComputeReservationTimeoutsOutputReference</a>

---

##### `DeleteAfterDurationInput`<sup>Optional</sup> <a name="DeleteAfterDurationInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAfterDurationInput"></a>

```go
func DeleteAfterDurationInput() ComputeReservationDeleteAfterDuration
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---

##### `DeleteAtTimeInput`<sup>Optional</sup> <a name="DeleteAtTimeInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTimeInput"></a>

```go
func DeleteAtTimeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.paramsInput"></a>

```go
func ParamsInput() ComputeReservationParams
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservationSharingPolicyInput`<sup>Optional</sup> <a name="ReservationSharingPolicyInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.reservationSharingPolicyInput"></a>

```go
func ReservationSharingPolicyInput() ComputeReservationReservationSharingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.shareSettingsInput"></a>

```go
func ShareSettingsInput() ComputeReservationShareSettings
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationInput"></a>

```go
func SpecificReservationInput() ComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---

##### `SpecificReservationRequiredInput`<sup>Optional</sup> <a name="SpecificReservationRequiredInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequiredInput"></a>

```go
func SpecificReservationRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `DeleteAtTime`<sup>Required</sup> <a name="DeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deleteAtTime"></a>

```go
func DeleteAtTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SpecificReservationRequired`<sup>Required</sup> <a name="SpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.specificReservationRequired"></a>

```go
func SpecificReservationRequired() interface{}
```

- *Type:* interface{}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.computeReservation.ComputeReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeReservationConfig <a name="ComputeReservationConfig" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SpecificReservation: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationSpecificReservation,
	Zone: *string,
	DeleteAfterDuration: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationDeleteAfterDuration,
	DeleteAtTime: *string,
	DeletionPolicy: *string,
	Description: *string,
	Params: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationParams,
	Project: *string,
	ReservationSharingPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationReservationSharingPolicy,
	ShareSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationShareSettings,
	SpecificReservationRequired: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | specific_reservation block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone where the reservation is made. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAfterDuration">DeleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | delete_after_duration block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAtTime">DeleteAtTime</a></code> | <code>*string</code> | Absolute time in future when the reservation will be auto-deleted by Compute Engine. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#project ComputeReservation#project}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.reservationSharingPolicy">ReservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | reservation_sharing_policy block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>interface{}</code> | When set to true, only VMs that target this reservation by name can consume this reservation. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#name ComputeReservation#name}

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservation"></a>

```go
SpecificReservation ComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#specific_reservation ComputeReservation#specific_reservation}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone where the reservation is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#zone ComputeReservation#zone}

---

##### `DeleteAfterDuration`<sup>Optional</sup> <a name="DeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAfterDuration"></a>

```go
DeleteAfterDuration ComputeReservationDeleteAfterDuration
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

delete_after_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#delete_after_duration ComputeReservation#delete_after_duration}

---

##### `DeleteAtTime`<sup>Optional</sup> <a name="DeleteAtTime" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deleteAtTime"></a>

```go
DeleteAtTime *string
```

- *Type:* *string

Absolute time in future when the reservation will be auto-deleted by Compute Engine.

Timestamp is represented in RFC3339 text format.
Cannot be used with delete_after_duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#delete_at_time ComputeReservation#delete_at_time}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#deletion_policy ComputeReservation#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#description ComputeReservation#description}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.params"></a>

```go
Params ComputeReservationParams
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#params ComputeReservation#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#project ComputeReservation#project}.

---

##### `ReservationSharingPolicy`<sup>Optional</sup> <a name="ReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.reservationSharingPolicy"></a>

```go
ReservationSharingPolicy ComputeReservationReservationSharingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

reservation_sharing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#reservation_sharing_policy ComputeReservation#reservation_sharing_policy}

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.shareSettings"></a>

```go
ShareSettings ComputeReservationShareSettings
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#share_settings ComputeReservation#share_settings}

---

##### `SpecificReservationRequired`<sup>Optional</sup> <a name="SpecificReservationRequired" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.specificReservationRequired"></a>

```go
SpecificReservationRequired interface{}
```

- *Type:* interface{}

When set to true, only VMs that target this reservation by name can consume this reservation.

Otherwise, it can be consumed by VMs with
affinity for any reservation. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#specific_reservation_required ComputeReservation#specific_reservation_required}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.computeReservation.ComputeReservationConfig.property.timeouts"></a>

```go
Timeouts ComputeReservationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts">ComputeReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#timeouts ComputeReservation#timeouts}

---

### ComputeReservationDeleteAfterDuration <a name="ComputeReservationDeleteAfterDuration" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationDeleteAfterDuration {
	Nanos: *f64,
	Seconds: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.nanos">Nanos</a></code> | <code>*f64</code> | Number of nanoseconds for the auto-delete duration. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.seconds">Seconds</a></code> | <code>*string</code> | Number of seconds for the auto-delete duration. |

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Number of nanoseconds for the auto-delete duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#nanos ComputeReservation#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration.property.seconds"></a>

```go
Seconds *string
```

- *Type:* *string

Number of seconds for the auto-delete duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#seconds ComputeReservation#seconds}

---

### ComputeReservationParams <a name="ComputeReservationParams" id="@cdktn/provider-google.computeReservation.ComputeReservationParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the reservation. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the reservation.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#resource_manager_tags ComputeReservation#resource_manager_tags}

---

### ComputeReservationReservationSharingPolicy <a name="ComputeReservationReservationSharingPolicy" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationReservationSharingPolicy {
	ServiceShareType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.property.serviceShareType">ServiceShareType</a></code> | <code>*string</code> | Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"]. |

---

##### `ServiceShareType`<sup>Optional</sup> <a name="ServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy.property.serviceShareType"></a>

```go
ServiceShareType *string
```

- *Type:* *string

Sharing config for all Google Cloud services. Possible values: ["ALLOW_ALL", "DISALLOW_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#service_share_type ComputeReservation#service_share_type}

---

### ComputeReservationResourceStatus <a name="ComputeReservationResourceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationResourceStatus {

}
```


### ComputeReservationResourceStatusHealthInfo <a name="ComputeReservationResourceStatusHealthInfo" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationResourceStatusHealthInfo {

}
```


### ComputeReservationResourceStatusReservationMaintenance <a name="ComputeReservationResourceStatusReservationMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationResourceStatusReservationMaintenance {

}
```


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance {

}
```


### ComputeReservationResourceStatusSpecificSkuAllocation <a name="ComputeReservationResourceStatusSpecificSkuAllocation" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationResourceStatusSpecificSkuAllocation {

}
```


### ComputeReservationShareSettings <a name="ComputeReservationShareSettings" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationShareSettings {
	ProjectMap: interface{},
	ShareType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.projectMap">ProjectMap</a></code> | <code>interface{}</code> | project_map block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.shareType">ShareType</a></code> | <code>*string</code> | Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"]. |

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.projectMap"></a>

```go
ProjectMap interface{}
```

- *Type:* interface{}

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#project_map ComputeReservation#project_map}

---

##### `ShareType`<sup>Optional</sup> <a name="ShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettings.property.shareType"></a>

```go
ShareType *string
```

- *Type:* *string

Type of sharing for this shared-reservation Possible values: ["LOCAL", "SPECIFIC_PROJECTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#share_type ComputeReservation#share_type}

---

### ComputeReservationShareSettingsProjectMap <a name="ComputeReservationShareSettingsProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationShareSettingsProjectMap {
	Id: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#id ComputeReservation#id}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>*string</code> | The project id/number, should be same as the key of this project config in the project map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#id ComputeReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMap.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project id/number, should be same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#project_id ComputeReservation#project_id}

---

### ComputeReservationSpecificReservation <a name="ComputeReservationSpecificReservation" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationSpecificReservation {
	Count: *f64,
	InstanceProperties: github.com/cdktn-io/cdktn-provider-google-go/google/v20.computeReservation.ComputeReservationSpecificReservationInstanceProperties,
	SourceInstanceTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.count">Count</a></code> | <code>*f64</code> | The number of resources that are allocated. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | instance_properties block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of resources that are allocated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#count ComputeReservation#count}

---

##### `InstanceProperties`<sup>Optional</sup> <a name="InstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.instanceProperties"></a>

```go
InstanceProperties ComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

instance_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#instance_properties ComputeReservation#instance_properties}

---

##### `SourceInstanceTemplate`<sup>Optional</sup> <a name="SourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation.property.sourceInstanceTemplate"></a>

```go
SourceInstanceTemplate *string
```

- *Type:* *string

Specifies the instance template to create the reservation. If you use this field, you must exclude the instanceProperties field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#source_instance_template ComputeReservation#source_instance_template}

---

### ComputeReservationSpecificReservationInstanceProperties <a name="ComputeReservationSpecificReservationInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationSpecificReservationInstanceProperties {
	MachineType: *string,
	GuestAccelerators: interface{},
	LocalSsds: interface{},
	MinCpuPlatform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.machineType">MachineType</a></code> | <code>*string</code> | The name of the machine type to reserve. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators">GuestAccelerators</a></code> | <code>interface{}</code> | guest_accelerators block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.localSsds">LocalSsds</a></code> | <code>interface{}</code> | local_ssds block. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | The minimum CPU platform for the reservation. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The name of the machine type to reserve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#machine_type ComputeReservation#machine_type}

---

##### `GuestAccelerators`<sup>Optional</sup> <a name="GuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.guestAccelerators"></a>

```go
GuestAccelerators interface{}
```

- *Type:* interface{}

guest_accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#guest_accelerators ComputeReservation#guest_accelerators}

---

##### `LocalSsds`<sup>Optional</sup> <a name="LocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.localSsds"></a>

```go
LocalSsds interface{}
```

- *Type:* interface{}

local_ssds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#local_ssds ComputeReservation#local_ssds}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties.property.minCpuPlatform"></a>

```go
MinCpuPlatform *string
```

- *Type:* *string

The minimum CPU platform for the reservation.

For example,
'"Intel Skylake"'. See
the CPU platform availability reference](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform#availablezones)
for information on available CPU platforms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#min_cpu_platform ComputeReservation#min_cpu_platform}

---

### ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'. |

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#accelerator_count ComputeReservation#accelerator_count}

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The full or partial URL of the accelerator type to attach to this instance. For example: 'projects/my-project/zones/us-central1-c/acceleratorTypes/nvidia-tesla-p100'.

If you are creating an instance template, specify only the accelerator name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#accelerator_type ComputeReservation#accelerator_type}

---

### ComputeReservationSpecificReservationInstancePropertiesLocalSsds <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds {
	DiskSizeGb: *f64,
	Interface: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | The size of the disk in base-2 GB. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface">Interface</a></code> | <code>*string</code> | The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"]. |

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.diskSizeGb"></a>

```go
DiskSizeGb *f64
```

- *Type:* *f64

The size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#disk_size_gb ComputeReservation#disk_size_gb}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsds.property.interface"></a>

```go
Interface *string
```

- *Type:* *string

The disk interface to use for attaching this disk. Default value: "SCSI" Possible values: ["SCSI", "NVME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#interface ComputeReservation#interface}

---

### ComputeReservationTimeouts <a name="ComputeReservationTimeouts" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

&computereservation.ComputeReservationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#create ComputeReservation#create}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#delete ComputeReservation#delete}. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#update ComputeReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#create ComputeReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#delete ComputeReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_reservation#update ComputeReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeReservationDeleteAfterDurationOutputReference <a name="ComputeReservationDeleteAfterDurationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationDeleteAfterDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationDeleteAfterDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationDeleteAfterDuration
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationDeleteAfterDuration">ComputeReservationDeleteAfterDuration</a>

---


### ComputeReservationParamsOutputReference <a name="ComputeReservationParamsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationParams
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationParams">ComputeReservationParams</a>

---


### ComputeReservationReservationSharingPolicyOutputReference <a name="ComputeReservationReservationSharingPolicyOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationReservationSharingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationReservationSharingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resetServiceShareType">ResetServiceShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceShareType` <a name="ResetServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.resetServiceShareType"></a>

```go
func ResetServiceShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareTypeInput">ServiceShareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType">ServiceShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceShareTypeInput`<sup>Optional</sup> <a name="ServiceShareTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareTypeInput"></a>

```go
func ServiceShareTypeInput() *string
```

- *Type:* *string

---

##### `ServiceShareType`<sup>Required</sup> <a name="ServiceShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType"></a>

```go
func ServiceShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationReservationSharingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationReservationSharingPolicy">ComputeReservationReservationSharingPolicy</a>

---


### ComputeReservationResourceStatusHealthInfoList <a name="ComputeReservationResourceStatusHealthInfoList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusHealthInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationResourceStatusHealthInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get"></a>

```go
func Get(index *f64) ComputeReservationResourceStatusHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeReservationResourceStatusHealthInfoOutputReference <a name="ComputeReservationResourceStatusHealthInfoOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusHealthInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationResourceStatusHealthInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount">DegradedBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus">HealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount">HealthyBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo">ComputeReservationResourceStatusHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DegradedBlockCount`<sup>Required</sup> <a name="DegradedBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount"></a>

```go
func DegradedBlockCount() *f64
```

- *Type:* *f64

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus"></a>

```go
func HealthStatus() *string
```

- *Type:* *string

---

##### `HealthyBlockCount`<sup>Required</sup> <a name="HealthyBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount"></a>

```go
func HealthyBlockCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationResourceStatusHealthInfo
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfo">ComputeReservationResourceStatusHealthInfo</a>

---


### ComputeReservationResourceStatusList <a name="ComputeReservationResourceStatusList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationResourceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get"></a>

```go
func Get(index *f64) ComputeReservationResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeReservationResourceStatusOutputReference <a name="ComputeReservationResourceStatusOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationResourceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList">ComputeReservationResourceStatusHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationBlockCount">ReservationBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationMaintenance">ReservationMaintenance</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.specificSkuAllocation">SpecificSkuAllocation</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList">ComputeReservationResourceStatusSpecificSkuAllocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus">ComputeReservationResourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.healthInfo"></a>

```go
func HealthInfo() ComputeReservationResourceStatusHealthInfoList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusHealthInfoList">ComputeReservationResourceStatusHealthInfoList</a>

---

##### `ReservationBlockCount`<sup>Required</sup> <a name="ReservationBlockCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationBlockCount"></a>

```go
func ReservationBlockCount() *f64
```

- *Type:* *f64

---

##### `ReservationMaintenance`<sup>Required</sup> <a name="ReservationMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.reservationMaintenance"></a>

```go
func ReservationMaintenance() ComputeReservationResourceStatusReservationMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceList</a>

---

##### `SpecificSkuAllocation`<sup>Required</sup> <a name="SpecificSkuAllocation" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.specificSkuAllocation"></a>

```go
func SpecificSkuAllocation() ComputeReservationResourceStatusSpecificSkuAllocationList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList">ComputeReservationResourceStatusSpecificSkuAllocationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationResourceStatus
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatus">ComputeReservationResourceStatus</a>

---


### ComputeReservationResourceStatusReservationMaintenanceList <a name="ComputeReservationResourceStatusReservationMaintenanceList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusReservationMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationResourceStatusReservationMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get"></a>

```go
func Get(index *f64) ComputeReservationResourceStatusReservationMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeReservationResourceStatusReservationMaintenanceOutputReference <a name="ComputeReservationResourceStatusReservationMaintenanceOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusReservationMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationResourceStatusReservationMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">InstanceMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount">InstanceMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount">MaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount">MaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType">SchedulingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">SubblockInfraMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">SubblockInfraMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance">UpcomingGroupMaintenance</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance">ComputeReservationResourceStatusReservationMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceOngoingCount`<sup>Required</sup> <a name="InstanceMaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```go
func InstanceMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `InstanceMaintenancePendingCount`<sup>Required</sup> <a name="InstanceMaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```go
func InstanceMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `MaintenanceOngoingCount`<sup>Required</sup> <a name="MaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```go
func MaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `MaintenancePendingCount`<sup>Required</sup> <a name="MaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount"></a>

```go
func MaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType"></a>

```go
func SchedulingType() *string
```

- *Type:* *string

---

##### `SubblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="SubblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```go
func SubblockInfraMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `SubblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="SubblockInfraMaintenancePendingCount" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```go
func SubblockInfraMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `UpcomingGroupMaintenance`<sup>Required</sup> <a name="UpcomingGroupMaintenance" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance"></a>

```go
func UpcomingGroupMaintenance() ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationResourceStatusReservationMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenance">ComputeReservationResourceStatusReservationMaintenance</a>

---


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get"></a>

```go
func Get(index *f64) ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference <a name="ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule">CanReschedule</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime">LatestWindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown">MaintenanceOnShutdown</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons">MaintenanceReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus">MaintenanceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime">WindowEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule"></a>

```go
func CanReschedule() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LatestWindowStartTime`<sup>Required</sup> <a name="LatestWindowStartTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime"></a>

```go
func LatestWindowStartTime() *string
```

- *Type:* *string

---

##### `MaintenanceOnShutdown`<sup>Required</sup> <a name="MaintenanceOnShutdown" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown"></a>

```go
func MaintenanceOnShutdown() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaintenanceReasons`<sup>Required</sup> <a name="MaintenanceReasons" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons"></a>

```go
func MaintenanceReasons() *[]*string
```

- *Type:* *[]*string

---

##### `MaintenanceStatus`<sup>Required</sup> <a name="MaintenanceStatus" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus"></a>

```go
func MaintenanceStatus() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WindowEndTime`<sup>Required</sup> <a name="WindowEndTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime"></a>

```go
func WindowEndTime() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">ComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a>

---


### ComputeReservationResourceStatusSpecificSkuAllocationList <a name="ComputeReservationResourceStatusSpecificSkuAllocationList" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusSpecificSkuAllocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationResourceStatusSpecificSkuAllocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get"></a>

```go
func Get(index *f64) ComputeReservationResourceStatusSpecificSkuAllocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeReservationResourceStatusSpecificSkuAllocationOutputReference <a name="ComputeReservationResourceStatusSpecificSkuAllocationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationResourceStatusSpecificSkuAllocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationResourceStatusSpecificSkuAllocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId">SourceInstanceTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations">Utilizations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation">ComputeReservationResourceStatusSpecificSkuAllocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInstanceTemplateId`<sup>Required</sup> <a name="SourceInstanceTemplateId" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId"></a>

```go
func SourceInstanceTemplateId() *string
```

- *Type:* *string

---

##### `Utilizations`<sup>Required</sup> <a name="Utilizations" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations"></a>

```go
func Utilizations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationResourceStatusSpecificSkuAllocation
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationResourceStatusSpecificSkuAllocation">ComputeReservationResourceStatusSpecificSkuAllocation</a>

---


### ComputeReservationShareSettingsOutputReference <a name="ComputeReservationShareSettingsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationShareSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationShareSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetShareType">ResetShareType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap"></a>

```go
func PutProjectMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetProjectMap"></a>

```go
func ResetProjectMap()
```

##### `ResetShareType` <a name="ResetShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.resetShareType"></a>

```go
func ResetShareType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList">ComputeReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMap"></a>

```go
func ProjectMap() ComputeReservationShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList">ComputeReservationShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.projectMapInput"></a>

```go
func ProjectMapInput() interface{}
```

- *Type:* interface{}

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareTypeInput"></a>

```go
func ShareTypeInput() *string
```

- *Type:* *string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationShareSettings
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettings">ComputeReservationShareSettings</a>

---


### ComputeReservationShareSettingsProjectMapList <a name="ComputeReservationShareSettingsProjectMapList" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationShareSettingsProjectMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationShareSettingsProjectMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get"></a>

```go
func Get(index *f64) ComputeReservationShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeReservationShareSettingsProjectMapOutputReference <a name="ComputeReservationShareSettingsProjectMapOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationShareSettingsProjectMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationShareSettingsProjectMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get"></a>

```go
func Get(index *f64) ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationSpecificReservationInstancePropertiesLocalSsdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get"></a>

```go
func Get(index *f64) ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterface` <a name="ResetInterface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resetInterface"></a>

```go
func ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interfaceInput"></a>

```go
func InterfaceInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeReservationSpecificReservationInstancePropertiesOutputReference <a name="ComputeReservationSpecificReservationInstancePropertiesOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationSpecificReservationInstancePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationSpecificReservationInstancePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators">PutGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds">PutLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators">ResetGuestAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds">ResetLocalSsds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuestAccelerators` <a name="PutGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators"></a>

```go
func PutGuestAccelerators(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putGuestAccelerators.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocalSsds` <a name="PutLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds"></a>

```go
func PutLocalSsds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.putLocalSsds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGuestAccelerators` <a name="ResetGuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetGuestAccelerators"></a>

```go
func ResetGuestAccelerators()
```

##### `ResetLocalSsds` <a name="ResetLocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetLocalSsds"></a>

```go
func ResetLocalSsds()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.resetMinCpuPlatform"></a>

```go
func ResetMinCpuPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput">GuestAcceleratorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput">LocalSsdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators"></a>

```go
func GuestAccelerators() ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">ComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds"></a>

```go
func LocalSsds() ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">ComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a>

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint"></a>

```go
func LocationHint() *string
```

- *Type:* *string

---

##### `GuestAcceleratorsInput`<sup>Optional</sup> <a name="GuestAcceleratorsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAcceleratorsInput"></a>

```go
func GuestAcceleratorsInput() interface{}
```

- *Type:* interface{}

---

##### `LocalSsdsInput`<sup>Optional</sup> <a name="LocalSsdsInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsdsInput"></a>

```go
func LocalSsdsInput() interface{}
```

- *Type:* interface{}

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatformInput"></a>

```go
func MinCpuPlatformInput() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---


### ComputeReservationSpecificReservationOutputReference <a name="ComputeReservationSpecificReservationOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationSpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationSpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties">PutInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetInstanceProperties">ResetInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetSourceInstanceTemplate">ResetSourceInstanceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceProperties` <a name="PutInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties"></a>

```go
func PutInstanceProperties(value ComputeReservationSpecificReservationInstanceProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.putInstanceProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---

##### `ResetInstanceProperties` <a name="ResetInstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetInstanceProperties"></a>

```go
func ResetInstanceProperties()
```

##### `ResetSourceInstanceTemplate` <a name="ResetSourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.resetSourceInstanceTemplate"></a>

```go
func ResetSourceInstanceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.assuredCount">AssuredCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference">ComputeReservationSpecificReservationInstancePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.inUseCount">InUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput">InstancePropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplateInput">SourceInstanceTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssuredCount`<sup>Required</sup> <a name="AssuredCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.assuredCount"></a>

```go
func AssuredCount() *f64
```

- *Type:* *f64

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instanceProperties"></a>

```go
func InstanceProperties() ComputeReservationSpecificReservationInstancePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstancePropertiesOutputReference">ComputeReservationSpecificReservationInstancePropertiesOutputReference</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.inUseCount"></a>

```go
func InUseCount() *f64
```

- *Type:* *f64

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `InstancePropertiesInput`<sup>Optional</sup> <a name="InstancePropertiesInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.instancePropertiesInput"></a>

```go
func InstancePropertiesInput() ComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationInstanceProperties">ComputeReservationSpecificReservationInstanceProperties</a>

---

##### `SourceInstanceTemplateInput`<sup>Optional</sup> <a name="SourceInstanceTemplateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplateInput"></a>

```go
func SourceInstanceTemplateInput() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate"></a>

```go
func SourceInstanceTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktn/provider-google.computeReservation.ComputeReservationSpecificReservation">ComputeReservationSpecificReservation</a>

---


### ComputeReservationTimeoutsOutputReference <a name="ComputeReservationTimeoutsOutputReference" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/computereservation"

computereservation.NewComputeReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.computeReservation.ComputeReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



