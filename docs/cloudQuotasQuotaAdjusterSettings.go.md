# `cloudQuotasQuotaAdjusterSettings` Submodule <a name="`cloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaAdjusterSettings <a name="CloudQuotasQuotaAdjusterSettings" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

cloudquotasquotaadjustersettings.NewCloudQuotasQuotaAdjusterSettings(scope Construct, id *string, config CloudQuotasQuotaAdjusterSettingsConfig) CloudQuotasQuotaAdjusterSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig">CloudQuotasQuotaAdjusterSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig">CloudQuotasQuotaAdjusterSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```go
func PutTimeouts(value CloudQuotasQuotaAdjusterSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

cloudquotasquotaadjustersettings.CloudQuotasQuotaAdjusterSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

cloudquotasquotaadjustersettings.CloudQuotasQuotaAdjusterSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

cloudquotasquotaadjustersettings.CloudQuotasQuotaAdjusterSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

cloudquotasquotaadjustersettings.CloudQuotasQuotaAdjusterSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudQuotasQuotaAdjusterSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer">EffectiveContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">EffectiveEnablement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited">Inherited</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom">InheritedFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput">EnablementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement">Enablement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveContainer`<sup>Required</sup> <a name="EffectiveContainer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```go
func EffectiveContainer() *string
```

- *Type:* *string

---

##### `EffectiveEnablement`<sup>Required</sup> <a name="EffectiveEnablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```go
func EffectiveEnablement() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inherited"></a>

```go
func Inherited() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InheritedFrom`<sup>Required</sup> <a name="InheritedFrom" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.inheritedFrom"></a>

```go
func InheritedFrom() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```go
func Timeouts() CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `EnablementInput`<sup>Optional</sup> <a name="EnablementInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```go
func EnablementInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Enablement`<sup>Required</sup> <a name="Enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```go
func Enablement() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaAdjusterSettingsConfig <a name="CloudQuotasQuotaAdjusterSettingsConfig" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

&cloudquotasquotaadjustersettings.CloudQuotasQuotaAdjusterSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Enablement: *string,
	Id: *string,
	Parent: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement">Enablement</a></code> | <code>*string</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enablement`<sup>Required</sup> <a name="Enablement" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```go
Enablement *string
```

- *Type:* *string

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#enablement CloudQuotasQuotaAdjusterSettings#enablement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#id CloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#parent CloudQuotasQuotaAdjusterSettings#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```go
Timeouts CloudQuotasQuotaAdjusterSettingsTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts">CloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#timeouts CloudQuotasQuotaAdjusterSettings#timeouts}

---

### CloudQuotasQuotaAdjusterSettingsTimeouts <a name="CloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

&cloudquotasquotaadjustersettings.CloudQuotasQuotaAdjusterSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#create CloudQuotasQuotaAdjusterSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#delete CloudQuotasQuotaAdjusterSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/cloud_quotas_quota_adjuster_settings#update CloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cloudquotasquotaadjustersettings"

cloudquotasquotaadjustersettings.NewCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudQuotasQuotaAdjusterSettings.CloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



