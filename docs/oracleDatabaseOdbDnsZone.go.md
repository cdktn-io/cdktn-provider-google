# `oracleDatabaseOdbDnsZone` Submodule <a name="`oracleDatabaseOdbDnsZone` Submodule" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseOdbDnsZone <a name="OracleDatabaseOdbDnsZone" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone google_oracle_database_odb_dns_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

oracledatabaseodbdnszone.NewOracleDatabaseOdbDnsZone(scope Construct, id *string, config OracleDatabaseOdbDnsZoneConfig) OracleDatabaseOdbDnsZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig">OracleDatabaseOdbDnsZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig">OracleDatabaseOdbDnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts"></a>

```go
func PutTimeouts(value OracleDatabaseOdbDnsZoneTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

oracledatabaseodbdnszone.OracleDatabaseOdbDnsZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

oracledatabaseodbdnszone.OracleDatabaseOdbDnsZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

oracledatabaseodbdnszone.OracleDatabaseOdbDnsZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

oracledatabaseodbdnszone.OracleDatabaseOdbDnsZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OracleDatabaseOdbDnsZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleDatabaseOdbDnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleDatabaseOdbDnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseOdbDnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput">OdbDnsZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput">OdbnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeouts"></a>

```go
func Timeouts() OracleDatabaseOdbDnsZoneTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference">OracleDatabaseOdbDnsZoneTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OdbDnsZoneIdInput`<sup>Optional</sup> <a name="OdbDnsZoneIdInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneIdInput"></a>

```go
func OdbDnsZoneIdInput() *string
```

- *Type:* *string

---

##### `OdbnetworkInput`<sup>Optional</sup> <a name="OdbnetworkInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetworkInput"></a>

```go
func OdbnetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbDnsZoneId"></a>

```go
func OdbDnsZoneId() *string
```

- *Type:* *string

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.odbnetwork"></a>

```go
func Odbnetwork() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseOdbDnsZoneConfig <a name="OracleDatabaseOdbDnsZoneConfig" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

&oracledatabaseodbdnszone.OracleDatabaseOdbDnsZoneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Location: *string,
	OdbDnsZoneId: *string,
	Odbnetwork: *string,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain">Domain</a></code> | <code>*string</code> | The DNS suffix for the zone. Ex: abc.example.com. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId">OdbDnsZoneId</a></code> | <code>*string</code> | The ID of the OdbDnsZone to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork">Odbnetwork</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS suffix for the zone. Ex: abc.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#domain OracleDatabaseOdbDnsZone#domain}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#location OracleDatabaseOdbDnsZone#location}

---

##### `OdbDnsZoneId`<sup>Required</sup> <a name="OdbDnsZoneId" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbDnsZoneId"></a>

```go
OdbDnsZoneId *string
```

- *Type:* *string

The ID of the OdbDnsZone to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odb_dns_zone_id OracleDatabaseOdbDnsZone#odb_dns_zone_id}

---

##### `Odbnetwork`<sup>Required</sup> <a name="Odbnetwork" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.odbnetwork"></a>

```go
Odbnetwork *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#odbnetwork OracleDatabaseOdbDnsZone#odbnetwork}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_policy OracleDatabaseOdbDnsZone#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#deletion_protection OracleDatabaseOdbDnsZone#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#id OracleDatabaseOdbDnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#labels OracleDatabaseOdbDnsZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#project OracleDatabaseOdbDnsZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneConfig.property.timeouts"></a>

```go
Timeouts OracleDatabaseOdbDnsZoneTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts">OracleDatabaseOdbDnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#timeouts OracleDatabaseOdbDnsZone#timeouts}

---

### OracleDatabaseOdbDnsZoneTimeouts <a name="OracleDatabaseOdbDnsZoneTimeouts" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

&oracledatabaseodbdnszone.OracleDatabaseOdbDnsZoneTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#create OracleDatabaseOdbDnsZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#delete OracleDatabaseOdbDnsZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/oracle_database_odb_dns_zone#update OracleDatabaseOdbDnsZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseOdbDnsZoneTimeoutsOutputReference <a name="OracleDatabaseOdbDnsZoneTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/oracledatabaseodbdnszone"

oracledatabaseodbdnszone.NewOracleDatabaseOdbDnsZoneTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleDatabaseOdbDnsZoneTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.oracleDatabaseOdbDnsZone.OracleDatabaseOdbDnsZoneTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



