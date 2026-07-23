# `managedKafkaConnector` Submodule <a name="`managedKafkaConnector` Submodule" id="@cdktn/provider-google.managedKafkaConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaConnector <a name="ManagedKafkaConnector" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector google_managed_kafka_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.NewManagedKafkaConnector(scope Construct, id *string, config ManagedKafkaConnectorConfig) ManagedKafkaConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig">ManagedKafkaConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig">ManagedKafkaConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy">PutTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs">ResetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy">ResetTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTaskRestartPolicy` <a name="PutTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy"></a>

```go
func PutTaskRestartPolicy(value ManagedKafkaConnectorTaskRestartPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTaskRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts"></a>

```go
func PutTimeouts(value ManagedKafkaConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

---

##### `ResetConfigs` <a name="ResetConfigs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetConfigs"></a>

```go
func ResetConfigs()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTaskRestartPolicy` <a name="ResetTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTaskRestartPolicy"></a>

```go
func ResetTaskRestartPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.ManagedKafkaConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.ManagedKafkaConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.ManagedKafkaConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.ManagedKafkaConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ManagedKafkaConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ManagedKafkaConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ManagedKafkaConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ManagedKafkaConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy">TaskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput">ConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput">ConnectClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput">ConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput">TaskRestartPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs">Configs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster">ConnectCluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TaskRestartPolicy`<sup>Required</sup> <a name="TaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicy"></a>

```go
func TaskRestartPolicy() ManagedKafkaConnectorTaskRestartPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference">ManagedKafkaConnectorTaskRestartPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeouts"></a>

```go
func Timeouts() ManagedKafkaConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference">ManagedKafkaConnectorTimeoutsOutputReference</a>

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configsInput"></a>

```go
func ConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectClusterInput`<sup>Optional</sup> <a name="ConnectClusterInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectClusterInput"></a>

```go
func ConnectClusterInput() *string
```

- *Type:* *string

---

##### `ConnectorIdInput`<sup>Optional</sup> <a name="ConnectorIdInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorIdInput"></a>

```go
func ConnectorIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TaskRestartPolicyInput`<sup>Optional</sup> <a name="TaskRestartPolicyInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.taskRestartPolicyInput"></a>

```go
func TaskRestartPolicyInput() ManagedKafkaConnectorTaskRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.configs"></a>

```go
func Configs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConnectCluster`<sup>Required</sup> <a name="ConnectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectCluster"></a>

```go
func ConnectCluster() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaConnectorConfig <a name="ManagedKafkaConnectorConfig" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

&managedkafkaconnector.ManagedKafkaConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectCluster: *string,
	ConnectorId: *string,
	Location: *string,
	Configs: *map[string]*string,
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	TaskRestartPolicy: github.com/cdktn-io/cdktn-provider-google-go/google/v19.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.managedKafkaConnector.ManagedKafkaConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster">ConnectCluster</a></code> | <code>*string</code> | The connect cluster name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId">ConnectorId</a></code> | <code>*string</code> | The ID to use for the connector, which will become the final component of the connector's name. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location">Location</a></code> | <code>*string</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs">Configs</a></code> | <code>*map[string]*string</code> | Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy">TaskRestartPolicy</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | task_restart_policy block. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectCluster`<sup>Required</sup> <a name="ConnectCluster" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectCluster"></a>

```go
ConnectCluster *string
```

- *Type:* *string

The connect cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#connect_cluster ManagedKafkaConnector#connect_cluster}

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.connectorId"></a>

```go
ConnectorId *string
```

- *Type:* *string

The ID to use for the connector, which will become the final component of the connector's name.

This value is structured like: 'my-connector-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#connector_id ManagedKafkaConnector#connector_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#location ManagedKafkaConnector#location}

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.configs"></a>

```go
Configs *map[string]*string
```

- *Type:* *map[string]*string

Connector config as keys/values. The keys of the map are connector property names, for example: 'connector.class', 'tasks.max', 'key.converter'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#configs ManagedKafkaConnector#configs}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#deletion_policy ManagedKafkaConnector#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#id ManagedKafkaConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#project ManagedKafkaConnector#project}.

---

##### `TaskRestartPolicy`<sup>Optional</sup> <a name="TaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.taskRestartPolicy"></a>

```go
TaskRestartPolicy ManagedKafkaConnectorTaskRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

task_restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#task_restart_policy ManagedKafkaConnector#task_restart_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorConfig.property.timeouts"></a>

```go
Timeouts ManagedKafkaConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts">ManagedKafkaConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#timeouts ManagedKafkaConnector#timeouts}

---

### ManagedKafkaConnectorTaskRestartPolicy <a name="ManagedKafkaConnectorTaskRestartPolicy" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

&managedkafkaconnector.ManagedKafkaConnectorTaskRestartPolicy {
	MaximumBackoff: *string,
	MinimumBackoff: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff">MaximumBackoff</a></code> | <code>*string</code> | The maximum amount of time to wait before retrying a failed task. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff">MinimumBackoff</a></code> | <code>*string</code> | The minimum amount of time to wait before retrying a failed task. |

---

##### `MaximumBackoff`<sup>Optional</sup> <a name="MaximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.maximumBackoff"></a>

```go
MaximumBackoff *string
```

- *Type:* *string

The maximum amount of time to wait before retrying a failed task.

This sets an upper bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#maximum_backoff ManagedKafkaConnector#maximum_backoff}

---

##### `MinimumBackoff`<sup>Optional</sup> <a name="MinimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy.property.minimumBackoff"></a>

```go
MinimumBackoff *string
```

- *Type:* *string

The minimum amount of time to wait before retrying a failed task.

This sets a lower bound for the backoff delay.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#minimum_backoff ManagedKafkaConnector#minimum_backoff}

---

### ManagedKafkaConnectorTimeouts <a name="ManagedKafkaConnectorTimeouts" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

&managedkafkaconnector.ManagedKafkaConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#create ManagedKafkaConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#delete ManagedKafkaConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/managed_kafka_connector#update ManagedKafkaConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaConnectorTaskRestartPolicyOutputReference <a name="ManagedKafkaConnectorTaskRestartPolicyOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.NewManagedKafkaConnectorTaskRestartPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaConnectorTaskRestartPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff">ResetMaximumBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff">ResetMinimumBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumBackoff` <a name="ResetMaximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMaximumBackoff"></a>

```go
func ResetMaximumBackoff()
```

##### `ResetMinimumBackoff` <a name="ResetMinimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.resetMinimumBackoff"></a>

```go
func ResetMinimumBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput">MaximumBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput">MinimumBackoffInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff">MaximumBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff">MinimumBackoff</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumBackoffInput`<sup>Optional</sup> <a name="MaximumBackoffInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoffInput"></a>

```go
func MaximumBackoffInput() *string
```

- *Type:* *string

---

##### `MinimumBackoffInput`<sup>Optional</sup> <a name="MinimumBackoffInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoffInput"></a>

```go
func MinimumBackoffInput() *string
```

- *Type:* *string

---

##### `MaximumBackoff`<sup>Required</sup> <a name="MaximumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.maximumBackoff"></a>

```go
func MaximumBackoff() *string
```

- *Type:* *string

---

##### `MinimumBackoff`<sup>Required</sup> <a name="MinimumBackoff" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.minimumBackoff"></a>

```go
func MinimumBackoff() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ManagedKafkaConnectorTaskRestartPolicy
```

- *Type:* <a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTaskRestartPolicy">ManagedKafkaConnectorTaskRestartPolicy</a>

---


### ManagedKafkaConnectorTimeoutsOutputReference <a name="ManagedKafkaConnectorTimeoutsOutputReference" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/managedkafkaconnector"

managedkafkaconnector.NewManagedKafkaConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ManagedKafkaConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.managedKafkaConnector.ManagedKafkaConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



