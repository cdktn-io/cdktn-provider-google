# `secretManagerRegionalSecretManagedRotation` Submodule <a name="`secretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretManagerRegionalSecretManagedRotation <a name="SecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotation(scope Construct, id *string, config SecretManagerRegionalSecretManagedRotationConfig) SecretManagerRegionalSecretManagedRotation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig">SecretManagerRegionalSecretManagedRotationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig">SecretManagerRegionalSecretManagedRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">PutCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudSqlSingleUserCredentials` <a name="PutCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```go
func PutCloudSqlSingleUserCredentials(value SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```go
func PutTimeouts(value SecretManagerRegionalSecretManagedRotationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretManagerRegionalSecretManagedRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">CloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation">Rotation</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">CloudSqlSingleUserCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudSqlSingleUserCredentials`<sup>Required</sup> <a name="CloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```go
func CloudSqlSingleUserCredentials() SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```go
func Rotation() SecretManagerRegionalSecretManagedRotationRotationList
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList">SecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```go
func Timeouts() SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `CloudSqlSingleUserCredentialsInput`<sup>Optional</sup> <a name="CloudSqlSingleUserCredentialsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```go
func CloudSqlSingleUserCredentialsInput() SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

&secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials {
	InstanceId: *string,
	Username: *string,
	Password: *string,
	PasswordWo: *string,
	PasswordWoVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">InstanceId</a></code> | <code>*string</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">Username</a></code> | <code>*string</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">Password</a></code> | <code>*string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | Triggers update of 'password_wo' write-only. |

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#instance_id SecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#username SecretManagerRegionalSecretManagedRotation#username}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```go
Password *string
```

- *Type:* *string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password SecretManagerRegionalSecretManagedRotation#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo SecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```go
PasswordWoVersion *string
```

- *Type:* *string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#password_wo_version SecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### SecretManagerRegionalSecretManagedRotationConfig <a name="SecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

&secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudSqlSingleUserCredentials: github.com/cdktn-io/cdktn-provider-google-go/google/v22.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials,
	Location: *string,
	SecretId: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">CloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location">Location</a></code> | <code>*string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudSqlSingleUserCredentials`<sup>Required</sup> <a name="CloudSqlSingleUserCredentials" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```go
CloudSqlSingleUserCredentials SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials SecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#location SecretManagerRegionalSecretManagedRotation#location}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#secret_id SecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#id SecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#project SecretManagerRegionalSecretManagedRotation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```go
Timeouts SecretManagerRegionalSecretManagedRotationTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts">SecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#timeouts SecretManagerRegionalSecretManagedRotation#timeouts}

---

### SecretManagerRegionalSecretManagedRotationRotation <a name="SecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

&secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotationRotation {

}
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

&secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus {

}
```


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

&secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError {

}
```


### SecretManagerRegionalSecretManagedRotationTimeouts <a name="SecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

&secretmanagerregionalsecretmanagedrotation.SecretManagerRegionalSecretManagedRotationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#create SecretManagerRegionalSecretManagedRotation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/secret_manager_regional_secret_managed_rotation#delete SecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```go
func ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```go
func ResetPasswordWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```go
func PasswordWoVersionInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### ~~`PasswordWo`~~<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```go
func PasswordWoVersion() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">SecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### SecretManagerRegionalSecretManagedRotationRotationList <a name="SecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationRotationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretManagerRegionalSecretManagedRotationRotationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```go
func Get(index *f64) SecretManagerRegionalSecretManagedRotationRotationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```go
func Get(index *f64) SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```go
func Get(index *f64) SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```go
func Error() SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### SecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="SecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationRotationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretManagerRegionalSecretManagedRotationRotationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">ManagedRotationStatus</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedRotationStatus`<sup>Required</sup> <a name="ManagedRotationStatus" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```go
func ManagedRotationStatus() SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">SecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```go
func InternalValue() SecretManagerRegionalSecretManagedRotationRotation
```

- *Type:* <a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationRotation">SecretManagerRegionalSecretManagedRotationRotation</a>

---


### SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/secretmanagerregionalsecretmanagedrotation"

secretmanagerregionalsecretmanagedrotation.NewSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.secretManagerRegionalSecretManagedRotation.SecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



