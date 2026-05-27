# `firebaseRemoteConfigRemoteConfig` Submodule <a name="`firebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseRemoteConfigRemoteConfig <a name="FirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfig(scope Construct, id *string, config FirebaseRemoteConfigRemoteConfigConfig) FirebaseRemoteConfigRemoteConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig">FirebaseRemoteConfigRemoteConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig">FirebaseRemoteConfigRemoteConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups">PutParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameterGroups">ResetParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameterGroups` <a name="PutParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```go
func PutParameterGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```go
func PutTimeouts(value FirebaseRemoteConfigRemoteConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetParameterGroups` <a name="ResetParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```go
func ResetParameterGroups()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FirebaseRemoteConfigRemoteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList">FirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroups">ParameterGroups</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList">FirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList">FirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.version">Version</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList">FirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">ParameterGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```go
func Conditions() FirebaseRemoteConfigRemoteConfigConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList">FirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterGroups`<sup>Required</sup> <a name="ParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```go
func ParameterGroups() FirebaseRemoteConfigRemoteConfigParameterGroupsList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList">FirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```go
func Parameters() FirebaseRemoteConfigRemoteConfigParametersList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList">FirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```go
func Timeouts() FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.version"></a>

```go
func Version() FirebaseRemoteConfigRemoteConfigVersionList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList">FirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterGroupsInput`<sup>Optional</sup> <a name="ParameterGroupsInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```go
func ParameterGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseRemoteConfigRemoteConfigConditions <a name="FirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigConditions {
	Expression: *string,
	Name: *string,
	TagColor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.expression">Expression</a></code> | <code>*string</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.name">Name</a></code> | <code>*string</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.tagColor">TagColor</a></code> | <code>*string</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#expression FirebaseRemoteConfigRemoteConfig#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```go
Name *string
```

- *Type:* *string

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#name FirebaseRemoteConfigRemoteConfig#name}

---

##### `TagColor`<sup>Optional</sup> <a name="TagColor" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```go
TagColor *string
```

- *Type:* *string

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#tag_color FirebaseRemoteConfigRemoteConfig#tag_color}

---

### FirebaseRemoteConfigRemoteConfigConfig <a name="FirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Conditions: interface{},
	Id: *string,
	ParameterGroups: interface{},
	Parameters: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">ParameterGroups</a></code> | <code>interface{}</code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#conditions FirebaseRemoteConfigRemoteConfig#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#id FirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterGroups`<sup>Optional</sup> <a name="ParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```go
ParameterGroups interface{}
```

- *Type:* interface{}

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_groups FirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#project FirebaseRemoteConfigRemoteConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```go
Timeouts FirebaseRemoteConfigRemoteConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts">FirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#timeouts FirebaseRemoteConfigRemoteConfig#timeouts}

---

### FirebaseRemoteConfigRemoteConfigParameterGroups <a name="FirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParameterGroups {
	ParameterGroupName: *string,
	Description: *string,
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.description">Description</a></code> | <code>*string</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```go
ParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_group_name FirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameters FirebaseRemoteConfigRemoteConfig#parameters}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters {
	ParameterName: *string,
	ConditionalValues: interface{},
	DefaultValue: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">ConditionalValues</a></code> | <code>interface{}</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">Description</a></code> | <code>*string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">ValueType</a></code> | <code>*string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `ConditionalValues`<sup>Optional</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```go
ConditionalValues interface{}
```

- *Type:* interface{}

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```go
DefaultValue FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues {
	ConditionName: *string,
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">ConditionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```go
ConditionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue {
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParameters <a name="FirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParameters {
	ParameterName: *string,
	ConditionalValues: interface{},
	DefaultValue: github.com/cdktn-io/cdktn-provider-google-go/google/v19.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue,
	Description: *string,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">ConditionalValues</a></code> | <code>interface{}</code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.description">Description</a></code> | <code>*string</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.valueType">ValueType</a></code> | <code>*string</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#parameter_name FirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `ConditionalValues`<sup>Optional</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```go
ConditionalValues interface{}
```

- *Type:* interface{}

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#conditional_values FirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```go
DefaultValue FirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#default_value FirebaseRemoteConfigRemoteConfig#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#description FirebaseRemoteConfigRemoteConfig#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#value_type FirebaseRemoteConfigRemoteConfig#value_type}

---

### FirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues {
	ConditionName: *string,
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">ConditionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```go
ConditionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#condition_name FirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="FirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue {
	UseInAppDefault: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">Value</a></code> | <code>*string</code> | The string value that the parameter is set to. |

---

##### `UseInAppDefault`<sup>Optional</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```go
UseInAppDefault interface{}
```

- *Type:* interface{}

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#use_in_app_default FirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#value FirebaseRemoteConfigRemoteConfig#value}

---

### FirebaseRemoteConfigRemoteConfigTimeouts <a name="FirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#create FirebaseRemoteConfigRemoteConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#delete FirebaseRemoteConfigRemoteConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/firebase_remote_config_remote_config#update FirebaseRemoteConfigRemoteConfig#update}.

---

### FirebaseRemoteConfigRemoteConfigVersion <a name="FirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigVersion {

}
```


### FirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

&firebaseremoteconfigremoteconfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### FirebaseRemoteConfigRemoteConfigConditionsList <a name="FirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="FirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">ResetTagColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagColor` <a name="ResetTagColor" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```go
func ResetTagColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">TagColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">TagColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagColorInput`<sup>Optional</sup> <a name="TagColorInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```go
func TagColorInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TagColor`<sup>Required</sup> <a name="TagColor" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```go
func TagColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigParameterGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```go
func Parameters() FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```go
func ParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">ConditionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">ConditionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionNameInput`<sup>Optional</sup> <a name="ConditionNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```go
func ConditionNameInput() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```go
func ConditionName() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">PutConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">ResetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionalValues` <a name="PutConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```go
func PutConditionalValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `ResetConditionalValues` <a name="ResetConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```go
func ResetConditionalValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">ConditionalValues</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">ConditionalValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionalValues`<sup>Required</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```go
func ConditionalValues() FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `ConditionalValuesInput`<sup>Optional</sup> <a name="ConditionalValuesInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```go
func ConditionalValuesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">ConditionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">ConditionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionNameInput`<sup>Optional</sup> <a name="ConditionNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```go
func ConditionNameInput() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ConditionName`<sup>Required</sup> <a name="ConditionName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```go
func ConditionName() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">ResetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseInAppDefault` <a name="ResetUseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```go
func ResetUseInAppDefault()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">UseInAppDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">UseInAppDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseInAppDefaultInput`<sup>Optional</sup> <a name="UseInAppDefaultInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```go
func UseInAppDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `UseInAppDefault`<sup>Required</sup> <a name="UseInAppDefault" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```go
func UseInAppDefault() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### FirebaseRemoteConfigRemoteConfigParametersList <a name="FirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="FirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">PutConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">PutDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">ResetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionalValues` <a name="PutConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```go
func PutConditionalValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultValue` <a name="PutDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```go
func PutDefaultValue(value FirebaseRemoteConfigRemoteConfigParametersDefaultValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `ResetConditionalValues` <a name="ResetConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```go
func ResetConditionalValues()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">ConditionalValues</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">ConditionalValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionalValues`<sup>Required</sup> <a name="ConditionalValues" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```go
func ConditionalValues() FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">FirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">FirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `ConditionalValuesInput`<sup>Optional</sup> <a name="ConditionalValuesInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```go
func ConditionalValuesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() FirebaseRemoteConfigRemoteConfigParametersDefaultValue
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersDefaultValue">FirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FirebaseRemoteConfigRemoteConfigVersionList <a name="FirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="FirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">IsLegacy</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">RollbackSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">UpdateOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">UpdateUser</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList">FirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion">FirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsLegacy`<sup>Required</sup> <a name="IsLegacy" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```go
func IsLegacy() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RollbackSource`<sup>Required</sup> <a name="RollbackSource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```go
func RollbackSource() *string
```

- *Type:* *string

---

##### `UpdateOrigin`<sup>Required</sup> <a name="UpdateOrigin" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```go
func UpdateOrigin() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```go
func UpdateUser() FirebaseRemoteConfigRemoteConfigVersionUpdateUserList
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList">FirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```go
func VersionNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseRemoteConfigRemoteConfigVersion
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersion">FirebaseRemoteConfigRemoteConfigVersion</a>

---


### FirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigVersionUpdateUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FirebaseRemoteConfigRemoteConfigVersionUpdateUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```go
func Get(index *f64) FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/firebaseremoteconfigremoteconfig"

firebaseremoteconfigremoteconfig.NewFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser">FirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```go
func InternalValue() FirebaseRemoteConfigRemoteConfigVersionUpdateUser
```

- *Type:* <a href="#@cdktn/provider-google.firebaseRemoteConfigRemoteConfig.FirebaseRemoteConfigRemoteConfigVersionUpdateUser">FirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



