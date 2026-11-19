# `saasRuntimeUnitKind` Submodule <a name="`saasRuntimeUnitKind` Submodule" id="@cdktn/provider-google.saasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitKind <a name="SaasRuntimeUnitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKind(scope Construct, id *string, config SaasRuntimeUnitKindConfig) SaasRuntimeUnitKind
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig">SaasRuntimeUnitKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig">SaasRuntimeUnitKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent">PutApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams">PutAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings">PutInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings">PutOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent">ResetApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams">ResetAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease">ResetDefaultRelease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies">ResetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings">ResetInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings">ResetOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationTemplateComponent` <a name="PutApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent"></a>

```go
func PutApplicationTemplateComponent(value SaasRuntimeUnitKindApplicationTemplateComponent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `PutAppParams` <a name="PutAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams"></a>

```go
func PutAppParams(value SaasRuntimeUnitKindAppParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `PutDependencies` <a name="PutDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies"></a>

```go
func PutDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputVariableMappings` <a name="PutInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings"></a>

```go
func PutInputVariableMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutputVariableMappings` <a name="PutOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings"></a>

```go
func PutOutputVariableMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts"></a>

```go
func PutTimeouts(value SaasRuntimeUnitKindTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetApplicationTemplateComponent` <a name="ResetApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent"></a>

```go
func ResetApplicationTemplateComponent()
```

##### `ResetAppParams` <a name="ResetAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams"></a>

```go
func ResetAppParams()
```

##### `ResetDefaultRelease` <a name="ResetDefaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease"></a>

```go
func ResetDefaultRelease()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies"></a>

```go
func ResetDependencies()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId"></a>

```go
func ResetId()
```

##### `ResetInputVariableMappings` <a name="ResetInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings"></a>

```go
func ResetInputVariableMappings()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOutputVariableMappings` <a name="ResetOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```go
func ResetOutputVariableMappings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.SaasRuntimeUnitKind_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.SaasRuntimeUnitKind_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.SaasRuntimeUnitKind_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.SaasRuntimeUnitKind_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SaasRuntimeUnitKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent">ApplicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams">AppParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings">InputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings">OutputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput">ApplicationTemplateComponentInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput">AppParamsInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput">DefaultReleaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput">DependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput">InputVariableMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput">OutputVariableMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput">SaasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput">UnitKindIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease">DefaultRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas">Saas</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId">UnitKindId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationTemplateComponent`<sup>Required</sup> <a name="ApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent"></a>

```go
func ApplicationTemplateComponent() SaasRuntimeUnitKindApplicationTemplateComponentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a>

---

##### `AppParams`<sup>Required</sup> <a name="AppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams"></a>

```go
func AppParams() SaasRuntimeUnitKindAppParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies"></a>

```go
func Dependencies() SaasRuntimeUnitKindDependenciesList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `InputVariableMappings`<sup>Required</sup> <a name="InputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings"></a>

```go
func InputVariableMappings() SaasRuntimeUnitKindInputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputVariableMappings`<sup>Required</sup> <a name="OutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings"></a>

```go
func OutputVariableMappings() SaasRuntimeUnitKindOutputVariableMappingsList
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts"></a>

```go
func Timeouts() SaasRuntimeUnitKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationTemplateComponentInput`<sup>Optional</sup> <a name="ApplicationTemplateComponentInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput"></a>

```go
func ApplicationTemplateComponentInput() SaasRuntimeUnitKindApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `AppParamsInput`<sup>Optional</sup> <a name="AppParamsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput"></a>

```go
func AppParamsInput() SaasRuntimeUnitKindAppParams
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `DefaultReleaseInput`<sup>Optional</sup> <a name="DefaultReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```go
func DefaultReleaseInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput"></a>

```go
func DependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputVariableMappingsInput`<sup>Optional</sup> <a name="InputVariableMappingsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```go
func InputVariableMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OutputVariableMappingsInput`<sup>Optional</sup> <a name="OutputVariableMappingsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```go
func OutputVariableMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SaasInput`<sup>Optional</sup> <a name="SaasInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput"></a>

```go
func SaasInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitKindIdInput`<sup>Optional</sup> <a name="UnitKindIdInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput"></a>

```go
func UnitKindIdInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefaultRelease`<sup>Required</sup> <a name="DefaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease"></a>

```go
func DefaultRelease() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Saas`<sup>Required</sup> <a name="Saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas"></a>

```go
func Saas() *string
```

- *Type:* *string

---

##### `UnitKindId`<sup>Required</sup> <a name="UnitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId"></a>

```go
func UnitKindId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitKindApplicationTemplateComponent <a name="SaasRuntimeUnitKindApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindApplicationTemplateComponent {
	Component: *string,
	CompositeRef: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef,
	Revision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component">Component</a></code> | <code>*string</code> | Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components'). |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef">CompositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | composite_ref block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision">Revision</a></code> | <code>*string</code> | Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate. |

---

##### `Component`<sup>Optional</sup> <a name="Component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component"></a>

```go
Component *string
```

- *Type:* *string

Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#component SaasRuntimeUnitKind#component}

---

##### `CompositeRef`<sup>Optional</sup> <a name="CompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef"></a>

```go
CompositeRef SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

composite_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#composite_ref SaasRuntimeUnitKind#composite_ref}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef {
	ApplicationTemplate: *string,
	Revision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate">ApplicationTemplate</a></code> | <code>*string</code> | Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision">Revision</a></code> | <code>*string</code> | Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'. |

---

##### `ApplicationTemplate`<sup>Required</sup> <a name="ApplicationTemplate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate"></a>

```go
ApplicationTemplate *string
```

- *Type:* *string

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template SaasRuntimeUnitKind#application_template}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindAppParams <a name="SaasRuntimeUnitKindAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindAppParams {
	Group: *string,
	Scope: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group">Group</a></code> | <code>*string</code> | Grouping used to construct the name of the App Hub Application. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | scope block. |

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group"></a>

```go
Group *string
```

- *Type:* *string

Grouping used to construct the name of the App Hub Application.

Multiple UnitKinds can specify the same group to use the same
Application across their respective Units. Corresponds to the
app_boundary_id in the ADC composite ApplicationTemplate. If empty,
the service creates no App Hub application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#group SaasRuntimeUnitKind#group}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope"></a>

```go
Scope SaasRuntimeUnitKindAppParamsScope
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#scope SaasRuntimeUnitKind#scope}

---

### SaasRuntimeUnitKindAppParamsScope <a name="SaasRuntimeUnitKindAppParamsScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindAppParamsScope {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type">Type</a></code> | <code>*string</code> | Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type"></a>

```go
Type *string
```

- *Type:* *string

Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#type SaasRuntimeUnitKind#type}

---

### SaasRuntimeUnitKindConfig <a name="SaasRuntimeUnitKindConfig" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Saas: *string,
	UnitKindId: *string,
	Annotations: *map[string]*string,
	ApplicationTemplateComponent: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent,
	AppParams: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams,
	DefaultRelease: *string,
	DeletionPolicy: *string,
	Dependencies: interface{},
	Id: *string,
	InputVariableMappings: interface{},
	Labels: *map[string]*string,
	OutputVariableMappings: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas">Saas</a></code> | <code>*string</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId">UnitKindId</a></code> | <code>*string</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent">ApplicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | application_template_component block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams">AppParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | app_params block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease">DefaultRelease</a></code> | <code>*string</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies">Dependencies</a></code> | <code>interface{}</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings">InputVariableMappings</a></code> | <code>interface{}</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings">OutputVariableMappings</a></code> | <code>interface{}</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}

---

##### `Saas`<sup>Required</sup> <a name="Saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas"></a>

```go
Saas *string
```

- *Type:* *string

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}

---

##### `UnitKindId`<sup>Required</sup> <a name="UnitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId"></a>

```go
UnitKindId *string
```

- *Type:* *string

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}

---

##### `ApplicationTemplateComponent`<sup>Optional</sup> <a name="ApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent"></a>

```go
ApplicationTemplateComponent SaasRuntimeUnitKindApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

application_template_component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}

---

##### `AppParams`<sup>Optional</sup> <a name="AppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams"></a>

```go
AppParams SaasRuntimeUnitKindAppParams
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

app_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}

---

##### `DefaultRelease`<sup>Optional</sup> <a name="DefaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```go
DefaultRelease *string
```

- *Type:* *string

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies"></a>

```go
Dependencies interface{}
```

- *Type:* interface{}

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputVariableMappings`<sup>Optional</sup> <a name="InputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```go
InputVariableMappings interface{}
```

- *Type:* interface{}

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}

---

##### `OutputVariableMappings`<sup>Optional</sup> <a name="OutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```go
OutputVariableMappings interface{}
```

- *Type:* interface{}

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts"></a>

```go
Timeouts SaasRuntimeUnitKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}

---

### SaasRuntimeUnitKindDependencies <a name="SaasRuntimeUnitKindDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindDependencies {
	Alias: *string,
	UnitKind: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias">Alias</a></code> | <code>*string</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind">UnitKind</a></code> | <code>*string</code> | The unit kind of the dependency. |

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#alias SaasRuntimeUnitKind#alias}

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind"></a>

```go
UnitKind *string
```

- *Type:* *string

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind SaasRuntimeUnitKind#unit_kind}

---

### SaasRuntimeUnitKindInputVariableMappings <a name="SaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindInputVariableMappings {
	Variable: *string,
	From: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom,
	To: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable">Variable</a></code> | <code>*string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from">From</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to">To</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```go
From SaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```go
To SaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindInputVariableMappingsFrom <a name="SaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindInputVariableMappingsFrom {
	Dependency: *string,
	OutputVariable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | Name of the outputVariable on the dependency. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```go
OutputVariable *string
```

- *Type:* *string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindInputVariableMappingsTo <a name="SaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindInputVariableMappingsTo {
	Dependency: *string,
	InputVariable: *string,
	IgnoreForLookup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">InputVariable</a></code> | <code>*string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```go
InputVariable *string
```

- *Type:* *string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `IgnoreForLookup`<sup>Optional</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```go
IgnoreForLookup interface{}
```

- *Type:* interface{}

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindOutputVariableMappings <a name="SaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindOutputVariableMappings {
	Variable: *string,
	From: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom,
	To: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable">Variable</a></code> | <code>*string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from">From</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to">To</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```go
From SaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```go
To SaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindOutputVariableMappingsFrom <a name="SaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindOutputVariableMappingsFrom {
	Dependency: *string,
	OutputVariable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | Name of the outputVariable on the dependency. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```go
OutputVariable *string
```

- *Type:* *string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindOutputVariableMappingsTo <a name="SaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindOutputVariableMappingsTo {
	Dependency: *string,
	InputVariable: *string,
	IgnoreForLookup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">Dependency</a></code> | <code>*string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">InputVariable</a></code> | <code>*string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```go
Dependency *string
```

- *Type:* *string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```go
InputVariable *string
```

- *Type:* *string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `IgnoreForLookup`<sup>Optional</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```go
IgnoreForLookup interface{}
```

- *Type:* interface{}

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindTimeouts <a name="SaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

&saasruntimeunitkind.SaasRuntimeUnitKindTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision"></a>

```go
func ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">SyncOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput">ApplicationTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">ApplicationTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SyncOperation`<sup>Required</sup> <a name="SyncOperation" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```go
func SyncOperation() *string
```

- *Type:* *string

---

##### `ApplicationTemplateInput`<sup>Optional</sup> <a name="ApplicationTemplateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput"></a>

```go
func ApplicationTemplateInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `ApplicationTemplate`<sup>Required</sup> <a name="ApplicationTemplate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```go
func ApplicationTemplate() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeUnitKindApplicationTemplateComponentOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindApplicationTemplateComponentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindApplicationTemplateComponentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef">PutCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent">ResetComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef">ResetCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositeRef` <a name="PutCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef"></a>

```go
func PutCompositeRef(value SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `ResetComponent` <a name="ResetComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent"></a>

```go
func ResetComponent()
```

##### `ResetCompositeRef` <a name="ResetCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef"></a>

```go
func ResetCompositeRef()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision"></a>

```go
func ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef">CompositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput">ComponentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput">CompositeRefInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component">Component</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompositeRef`<sup>Required</sup> <a name="CompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```go
func CompositeRef() SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a>

---

##### `ComponentInput`<sup>Optional</sup> <a name="ComponentInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput"></a>

```go
func ComponentInput() *string
```

- *Type:* *string

---

##### `CompositeRefInput`<sup>Optional</sup> <a name="CompositeRefInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput"></a>

```go
func CompositeRefInput() SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component"></a>

```go
func Component() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindApplicationTemplateComponent
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---


### SaasRuntimeUnitKindAppParamsOutputReference <a name="SaasRuntimeUnitKindAppParamsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindAppParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindAppParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope"></a>

```go
func PutScope(value SaasRuntimeUnitKindAppParamsScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope"></a>

```go
func Scope() SaasRuntimeUnitKindAppParamsScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a>

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() SaasRuntimeUnitKindAppParamsScope
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindAppParams
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---


### SaasRuntimeUnitKindAppParamsScopeOutputReference <a name="SaasRuntimeUnitKindAppParamsScopeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindAppParamsScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindAppParamsScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindAppParamsScope
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---


### SaasRuntimeUnitKindDependenciesList <a name="SaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitKindDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitKindDependenciesOutputReference <a name="SaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitKindDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">UnitKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">UnitKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```go
func UnitKindInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```go
func UnitKind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindInputVariableMappingsFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindInputVariableMappingsFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">OutputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `OutputVariableInput`<sup>Optional</sup> <a name="OutputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```go
func OutputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```go
func OutputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindInputVariableMappingsList <a name="SaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindInputVariableMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitKindInputVariableMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitKindInputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindInputVariableMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitKindInputVariableMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```go
func PutFrom(value SaasRuntimeUnitKindInputVariableMappingsFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `PutTo` <a name="PutTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```go
func PutTo(value SaasRuntimeUnitKindInputVariableMappingsTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">From</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">To</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">FromInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">ToInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```go
func From() SaasRuntimeUnitKindInputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```go
func To() SaasRuntimeUnitKindInputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```go
func FromInput() SaasRuntimeUnitKindInputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```go
func ToInput() SaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindInputVariableMappingsToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindInputVariableMappingsToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">ResetIgnoreForLookup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreForLookup` <a name="ResetIgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```go
func ResetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">IgnoreForLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">InputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">InputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `IgnoreForLookupInput`<sup>Optional</sup> <a name="IgnoreForLookupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```go
func IgnoreForLookupInput() interface{}
```

- *Type:* interface{}

---

##### `InputVariableInput`<sup>Optional</sup> <a name="InputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```go
func InputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `IgnoreForLookup`<sup>Required</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```go
func IgnoreForLookup() interface{}
```

- *Type:* interface{}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```go
func InputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindInputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">OutputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">OutputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `OutputVariableInput`<sup>Optional</sup> <a name="OutputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```go
func OutputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `OutputVariable`<sup>Required</sup> <a name="OutputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```go
func OutputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsList <a name="SaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindOutputVariableMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SaasRuntimeUnitKindOutputVariableMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```go
func Get(index *f64) SaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindOutputVariableMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">PutTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFrom` <a name="PutFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```go
func PutFrom(value SaasRuntimeUnitKindOutputVariableMappingsFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `PutTo` <a name="PutTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```go
func PutTo(value SaasRuntimeUnitKindOutputVariableMappingsTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```go
func ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```go
func ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">From</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">To</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">FromInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">ToInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```go
func From() SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```go
func To() SaasRuntimeUnitKindOutputVariableMappingsToOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```go
func FromInput() SaasRuntimeUnitKindOutputVariableMappingsFrom
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```go
func ToInput() SaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindOutputVariableMappingsToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindOutputVariableMappingsToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">ResetIgnoreForLookup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreForLookup` <a name="ResetIgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```go
func ResetIgnoreForLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">DependencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">IgnoreForLookupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">InputVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">Dependency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">IgnoreForLookup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">InputVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```go
func DependencyInput() *string
```

- *Type:* *string

---

##### `IgnoreForLookupInput`<sup>Optional</sup> <a name="IgnoreForLookupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```go
func IgnoreForLookupInput() interface{}
```

- *Type:* interface{}

---

##### `InputVariableInput`<sup>Optional</sup> <a name="InputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```go
func InputVariableInput() *string
```

- *Type:* *string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```go
func Dependency() *string
```

- *Type:* *string

---

##### `IgnoreForLookup`<sup>Required</sup> <a name="IgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```go
func IgnoreForLookup() interface{}
```

- *Type:* interface{}

---

##### `InputVariable`<sup>Required</sup> <a name="InputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```go
func InputVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeUnitKindOutputVariableMappingsTo
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindTimeoutsOutputReference <a name="SaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimeunitkind"

saasruntimeunitkind.NewSaasRuntimeUnitKindTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeUnitKindTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



