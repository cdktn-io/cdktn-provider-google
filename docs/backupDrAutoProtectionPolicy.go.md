# `backupDrAutoProtectionPolicy` Submodule <a name="`backupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicy <a name="BackupDrAutoProtectionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicy(scope Construct, id *string, config BackupDrAutoProtectionPolicyConfig) BackupDrAutoProtectionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig">BackupDrAutoProtectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig">BackupDrAutoProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails">PutBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPlanDetails` <a name="PutBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```go
func PutBackupPlanDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria"></a>

```go
func PutCriteria(value BackupDrAutoProtectionPolicyCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts"></a>

```go
func PutTimeouts(value BackupDrAutoProtectionPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupDrAutoProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails">BackupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary">BindingSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary">PolicyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">AutoProtectionPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">BackupPlanDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```go
func BackupPlanDetails() BackupDrAutoProtectionPolicyBackupPlanDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `BindingSummary`<sup>Required</sup> <a name="BindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```go
func BindingSummary() BackupDrAutoProtectionPolicyBindingSummaryList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria"></a>

```go
func Criteria() BackupDrAutoProtectionPolicyCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyEvaluationSummary`<sup>Required</sup> <a name="PolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```go
func PolicyEvaluationSummary() BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts"></a>

```go
func Timeouts() BackupDrAutoProtectionPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AutoProtectionPolicyIdInput`<sup>Optional</sup> <a name="AutoProtectionPolicyIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```go
func AutoProtectionPolicyIdInput() *string
```

- *Type:* *string

---

##### `BackupPlanDetailsInput`<sup>Optional</sup> <a name="BackupPlanDetailsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```go
func BackupPlanDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```go
func CriteriaInput() BackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```go
func AutoProtectionPolicyId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetails <a name="BackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyBackupPlanDetails {
	BackupPlan: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">ResourceType</a></code> | <code>*string</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```go
BackupPlan *string
```

- *Type:* *string

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan BackupDrAutoProtectionPolicy#backup_plan}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#resource_type BackupDrAutoProtectionPolicy#resource_type}

---

### BackupDrAutoProtectionPolicyBindingSummary <a name="BackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyBindingSummary {

}
```


### BackupDrAutoProtectionPolicyConfig <a name="BackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutoProtectionPolicyId: *string,
	BackupPlanDetails: interface{},
	Criteria: github.com/cdktn-io/cdktn-provider-google-go/google/v22.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria,
	Location: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">AutoProtectionPolicyId</a></code> | <code>*string</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">BackupPlanDetails</a></code> | <code>interface{}</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description">Description</a></code> | <code>*string</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoProtectionPolicyId`<sup>Required</sup> <a name="AutoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```go
AutoProtectionPolicyId *string
```

- *Type:* *string

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `BackupPlanDetails`<sup>Required</sup> <a name="BackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```go
BackupPlanDetails interface{}
```

- *Type:* interface{}

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```go
Criteria BackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```go
Timeouts BackupDrAutoProtectionPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

### BackupDrAutoProtectionPolicyCriteria <a name="BackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyCriteria {
	MatchingConditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions">MatchingConditions</a></code> | <code>interface{}</code> | matching_conditions block. |

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```go
MatchingConditions interface{}
```

- *Type:* interface{}

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions {
	LabelCondition: github.com/cdktn-io/cdktn-provider-google-go/google/v22.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `LabelCondition`<sup>Optional</sup> <a name="LabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```go
LabelCondition BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#label_condition BackupDrAutoProtectionPolicy#label_condition}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">Key</a></code> | <code>*string</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">Values</a></code> | <code>*[]*string</code> | The values of the label to match. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}

---

### BackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary {

}
```


### BackupDrAutoProtectionPolicyTimeouts <a name="BackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

&backupdrautoprotectionpolicy.BackupDrAutoProtectionPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyBackupPlanDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupDrAutoProtectionPolicyBackupPlanDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```go
func Get(index *f64) BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">BackupPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```go
func BackupPlanInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupDrAutoProtectionPolicyBindingSummaryList <a name="BackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyBindingSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupDrAutoProtectionPolicyBindingSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```go
func Get(index *f64) BackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyBindingSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">ProjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectCount`<sup>Required</sup> <a name="ProjectCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```go
func ProjectCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupDrAutoProtectionPolicyBindingSummary
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```go
func Get(index *f64) BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">PutLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">ResetLabelCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelCondition` <a name="PutLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```go
func PutLabelCondition(value BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `ResetLabelCondition` <a name="ResetLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```go
func ResetLabelCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">LabelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">LabelConditionInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelCondition`<sup>Required</sup> <a name="LabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```go
func LabelCondition() BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `LabelConditionInput`<sup>Optional</sup> <a name="LabelConditionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```go
func LabelConditionInput() BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupDrAutoProtectionPolicyCriteriaOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupDrAutoProtectionPolicyCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">PutMatchingConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingConditions` <a name="PutMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```go
func PutMatchingConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">MatchingConditions</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">MatchingConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingConditions`<sup>Required</sup> <a name="MatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```go
func MatchingConditions() BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `MatchingConditionsInput`<sup>Optional</sup> <a name="MatchingConditionsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```go
func MatchingConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupDrAutoProtectionPolicyCriteria
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```go
func Get(index *f64) BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">FailedResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">MatchingResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">ProtectedResourceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailedResourceCount`<sup>Required</sup> <a name="FailedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```go
func FailedResourceCount() *string
```

- *Type:* *string

---

##### `MatchingResourceCount`<sup>Required</sup> <a name="MatchingResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```go
func MatchingResourceCount() *string
```

- *Type:* *string

---

##### `ProtectedResourceCount`<sup>Required</sup> <a name="ProtectedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```go
func ProtectedResourceCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupDrAutoProtectionPolicyPolicyEvaluationSummary
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/backupdrautoprotectionpolicy"

backupdrautoprotectionpolicy.NewBackupDrAutoProtectionPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupDrAutoProtectionPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



