# `saasRuntimeUnitKind` Submodule <a name="`saasRuntimeUnitKind` Submodule" id="@cdktn/provider-google.saasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnitKind <a name="SaasRuntimeUnitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKind(scope: Construct, id: string, config: SaasRuntimeUnitKindConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig">SaasRuntimeUnitKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig">SaasRuntimeUnitKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent">putApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams">putAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings">putInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings">putOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent">resetApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams">resetAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease">resetDefaultRelease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings">resetInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings">resetOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationTemplateComponent` <a name="putApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent"></a>

```typescript
public putApplicationTemplateComponent(value: SaasRuntimeUnitKindApplicationTemplateComponent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putApplicationTemplateComponent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `putAppParams` <a name="putAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams"></a>

```typescript
public putAppParams(value: SaasRuntimeUnitKindAppParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putAppParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `putDependencies` <a name="putDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies"></a>

```typescript
public putDependencies(value: IResolvable | SaasRuntimeUnitKindDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]

---

##### `putInputVariableMappings` <a name="putInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings"></a>

```typescript
public putInputVariableMappings(value: IResolvable | SaasRuntimeUnitKindInputVariableMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]

---

##### `putOutputVariableMappings` <a name="putOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings"></a>

```typescript
public putOutputVariableMappings(value: IResolvable | SaasRuntimeUnitKindOutputVariableMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts"></a>

```typescript
public putTimeouts(value: SaasRuntimeUnitKindTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetApplicationTemplateComponent` <a name="resetApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetApplicationTemplateComponent"></a>

```typescript
public resetApplicationTemplateComponent(): void
```

##### `resetAppParams` <a name="resetAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetAppParams"></a>

```typescript
public resetAppParams(): void
```

##### `resetDefaultRelease` <a name="resetDefaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDefaultRelease"></a>

```typescript
public resetDefaultRelease(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputVariableMappings` <a name="resetInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetInputVariableMappings"></a>

```typescript
public resetInputVariableMappings(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOutputVariableMappings` <a name="resetOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```typescript
public resetOutputVariableMappings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

saasRuntimeUnitKind.SaasRuntimeUnitKind.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeUnitKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent">applicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams">appParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings">inputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings">outputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput">applicationTemplateComponentInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput">appParamsInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput">defaultReleaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput">dependenciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput">inputVariableMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput">outputVariableMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput">saasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput">unitKindIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease">defaultRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas">saas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId">unitKindId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationTemplateComponent`<sup>Required</sup> <a name="applicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponent"></a>

```typescript
public readonly applicationTemplateComponent: SaasRuntimeUnitKindApplicationTemplateComponentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentOutputReference</a>

---

##### `appParams`<sup>Required</sup> <a name="appParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParams"></a>

```typescript
public readonly appParams: SaasRuntimeUnitKindAppParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference">SaasRuntimeUnitKindAppParamsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependencies"></a>

```typescript
public readonly dependencies: SaasRuntimeUnitKindDependenciesList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList">SaasRuntimeUnitKindDependenciesList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `inputVariableMappings`<sup>Required</sup> <a name="inputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappings"></a>

```typescript
public readonly inputVariableMappings: SaasRuntimeUnitKindInputVariableMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList">SaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputVariableMappings`<sup>Required</sup> <a name="outputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappings"></a>

```typescript
public readonly outputVariableMappings: SaasRuntimeUnitKindOutputVariableMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList">SaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeUnitKindTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference">SaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationTemplateComponentInput`<sup>Optional</sup> <a name="applicationTemplateComponentInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.applicationTemplateComponentInput"></a>

```typescript
public readonly applicationTemplateComponentInput: SaasRuntimeUnitKindApplicationTemplateComponent;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---

##### `appParamsInput`<sup>Optional</sup> <a name="appParamsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.appParamsInput"></a>

```typescript
public readonly appParamsInput: SaasRuntimeUnitKindAppParams;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---

##### `defaultReleaseInput`<sup>Optional</sup> <a name="defaultReleaseInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```typescript
public readonly defaultReleaseInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: IResolvable | SaasRuntimeUnitKindDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputVariableMappingsInput`<sup>Optional</sup> <a name="inputVariableMappingsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```typescript
public readonly inputVariableMappingsInput: IResolvable | SaasRuntimeUnitKindInputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `outputVariableMappingsInput`<sup>Optional</sup> <a name="outputVariableMappingsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```typescript
public readonly outputVariableMappingsInput: IResolvable | SaasRuntimeUnitKindOutputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `saasInput`<sup>Optional</sup> <a name="saasInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saasInput"></a>

```typescript
public readonly saasInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SaasRuntimeUnitKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---

##### `unitKindIdInput`<sup>Optional</sup> <a name="unitKindIdInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindIdInput"></a>

```typescript
public readonly unitKindIdInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultRelease`<sup>Required</sup> <a name="defaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.defaultRelease"></a>

```typescript
public readonly defaultRelease: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.saas"></a>

```typescript
public readonly saas: string;
```

- *Type:* string

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.unitKindId"></a>

```typescript
public readonly unitKindId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKind.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitKindApplicationTemplateComponent <a name="SaasRuntimeUnitKindApplicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindApplicationTemplateComponent: saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component">component</a></code> | <code>string</code> | Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components'). |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef">compositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | composite_ref block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision">revision</a></code> | <code>string</code> | Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate. |

---

##### `component`<sup>Optional</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

Name of the component in the composite ApplicationTemplate (the root module ID, e.g. a composite component ID or 'native-components').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#component SaasRuntimeUnitKind#component}

---

##### `compositeRef`<sup>Optional</sup> <a name="compositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.compositeRef"></a>

```typescript
public readonly compositeRef: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

composite_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#composite_ref SaasRuntimeUnitKind#composite_ref}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Revision of the component. If the component does not have a revision, this is the revision of the composite ApplicationTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindApplicationTemplateComponentCompositeRef: saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate">applicationTemplate</a></code> | <code>string</code> | Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision">revision</a></code> | <code>string</code> | Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'. |

---

##### `applicationTemplate`<sup>Required</sup> <a name="applicationTemplate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.applicationTemplate"></a>

```typescript
public readonly applicationTemplate: string;
```

- *Type:* string

Reference to the ApplicationTemplate resource, in the format 'projects/{project}/locations/{location}/spaces/{space}/applicationTemplates/{applicationTemplate}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template SaasRuntimeUnitKind#application_template}

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Revision of the ApplicationTemplate, as a full resource name prefixed by 'application_template'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#revision SaasRuntimeUnitKind#revision}

---

### SaasRuntimeUnitKindAppParams <a name="SaasRuntimeUnitKindAppParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindAppParams: saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group">group</a></code> | <code>string</code> | Grouping used to construct the name of the App Hub Application. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | scope block. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Grouping used to construct the name of the App Hub Application.

Multiple UnitKinds can specify the same group to use the same
Application across their respective Units. Corresponds to the
app_boundary_id in the ADC composite ApplicationTemplate. If empty,
the service creates no App Hub application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#group SaasRuntimeUnitKind#group}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams.property.scope"></a>

```typescript
public readonly scope: SaasRuntimeUnitKindAppParamsScope;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#scope SaasRuntimeUnitKind#scope}

---

### SaasRuntimeUnitKindAppParamsScope <a name="SaasRuntimeUnitKindAppParamsScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindAppParamsScope: saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type">type</a></code> | <code>string</code> | Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Scope type. Possible values: TYPE_REGIONAL TYPE_GLOBAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#type SaasRuntimeUnitKind#type}

---

### SaasRuntimeUnitKindConfig <a name="SaasRuntimeUnitKindConfig" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindConfig: saasRuntimeUnitKind.SaasRuntimeUnitKindConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas">saas</a></code> | <code>string</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId">unitKindId</a></code> | <code>string</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent">applicationTemplateComponent</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | application_template_component block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams">appParams</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | app_params block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease">defaultRelease</a></code> | <code>string</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings">inputVariableMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings">outputVariableMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#location SaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.saas"></a>

```typescript
public readonly saas: string;
```

- *Type:* string

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#saas SaasRuntimeUnitKind#saas}

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.unitKindId"></a>

```typescript
public readonly unitKindId: string;
```

- *Type:* string

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind_id SaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#annotations SaasRuntimeUnitKind#annotations}

---

##### `applicationTemplateComponent`<sup>Optional</sup> <a name="applicationTemplateComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.applicationTemplateComponent"></a>

```typescript
public readonly applicationTemplateComponent: SaasRuntimeUnitKindApplicationTemplateComponent;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

application_template_component block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#application_template_component SaasRuntimeUnitKind#application_template_component}

---

##### `appParams`<sup>Optional</sup> <a name="appParams" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.appParams"></a>

```typescript
public readonly appParams: SaasRuntimeUnitKindAppParams;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

app_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#app_params SaasRuntimeUnitKind#app_params}

---

##### `defaultRelease`<sup>Optional</sup> <a name="defaultRelease" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```typescript
public readonly defaultRelease: string;
```

- *Type:* string

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#default_release SaasRuntimeUnitKind#default_release}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#deletion_policy SaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.dependencies"></a>

```typescript
public readonly dependencies: IResolvable | SaasRuntimeUnitKindDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependencies SaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#id SaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableMappings`<sup>Optional</sup> <a name="inputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```typescript
public readonly inputVariableMappings: IResolvable | SaasRuntimeUnitKindInputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable_mappings SaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#labels SaasRuntimeUnitKind#labels}

---

##### `outputVariableMappings`<sup>Optional</sup> <a name="outputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```typescript
public readonly outputVariableMappings: IResolvable | SaasRuntimeUnitKindOutputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable_mappings SaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#project SaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeUnitKindTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#timeouts SaasRuntimeUnitKind#timeouts}

---

### SaasRuntimeUnitKindDependencies <a name="SaasRuntimeUnitKindDependencies" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindDependencies: saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias">alias</a></code> | <code>string</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind">unitKind</a></code> | <code>string</code> | The unit kind of the dependency. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#alias SaasRuntimeUnitKind#alias}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#unit_kind SaasRuntimeUnitKind#unit_kind}

---

### SaasRuntimeUnitKindInputVariableMappings <a name="SaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindInputVariableMappings: saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable">variable</a></code> | <code>string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```typescript
public readonly from: SaasRuntimeUnitKindInputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```typescript
public readonly to: SaasRuntimeUnitKindInputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindInputVariableMappingsFrom <a name="SaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindInputVariableMappingsFrom: saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>string</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindInputVariableMappingsTo <a name="SaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindInputVariableMappingsTo: saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindOutputVariableMappings <a name="SaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindOutputVariableMappings: saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable">variable</a></code> | <code>string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#variable SaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```typescript
public readonly from: SaasRuntimeUnitKindOutputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#from SaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```typescript
public readonly to: SaasRuntimeUnitKindOutputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#to SaasRuntimeUnitKind#to}

---

### SaasRuntimeUnitKindOutputVariableMappingsFrom <a name="SaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindOutputVariableMappingsFrom: saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>string</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#output_variable SaasRuntimeUnitKind#output_variable}

---

### SaasRuntimeUnitKindOutputVariableMappingsTo <a name="SaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindOutputVariableMappingsTo: saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#dependency SaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#input_variable SaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#ignore_for_lookup SaasRuntimeUnitKind#ignore_for_lookup}

---

### SaasRuntimeUnitKindTimeouts <a name="SaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

const saasRuntimeUnitKindTimeouts: saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#create SaasRuntimeUnitKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#delete SaasRuntimeUnitKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit_kind#update SaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation">syncOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput">applicationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate">applicationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `syncOperation`<sup>Required</sup> <a name="syncOperation" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.syncOperation"></a>

```typescript
public readonly syncOperation: string;
```

- *Type:* string

---

##### `applicationTemplateInput`<sup>Optional</sup> <a name="applicationTemplateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplateInput"></a>

```typescript
public readonly applicationTemplateInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `applicationTemplate`<sup>Required</sup> <a name="applicationTemplate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.applicationTemplate"></a>

```typescript
public readonly applicationTemplate: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---


### SaasRuntimeUnitKindApplicationTemplateComponentOutputReference <a name="SaasRuntimeUnitKindApplicationTemplateComponentOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef">putCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent">resetComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef">resetCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompositeRef` <a name="putCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef"></a>

```typescript
public putCompositeRef(value: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.putCompositeRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `resetComponent` <a name="resetComponent" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetComponent"></a>

```typescript
public resetComponent(): void
```

##### `resetCompositeRef` <a name="resetCompositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetCompositeRef"></a>

```typescript
public resetCompositeRef(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef">compositeRef</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput">componentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput">compositeRefInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component">component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compositeRef`<sup>Required</sup> <a name="compositeRef" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRef"></a>

```typescript
public readonly compositeRef: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRefOutputReference</a>

---

##### `componentInput`<sup>Optional</sup> <a name="componentInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.componentInput"></a>

```typescript
public readonly componentInput: string;
```

- *Type:* string

---

##### `compositeRefInput`<sup>Optional</sup> <a name="compositeRefInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.compositeRefInput"></a>

```typescript
public readonly compositeRefInput: SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef">SaasRuntimeUnitKindApplicationTemplateComponentCompositeRef</a>

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.component"></a>

```typescript
public readonly component: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindApplicationTemplateComponent;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindApplicationTemplateComponent">SaasRuntimeUnitKindApplicationTemplateComponent</a>

---


### SaasRuntimeUnitKindAppParamsOutputReference <a name="SaasRuntimeUnitKindAppParamsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScope` <a name="putScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope"></a>

```typescript
public putScope(value: SaasRuntimeUnitKindAppParamsScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scope"></a>

```typescript
public readonly scope: SaasRuntimeUnitKindAppParamsScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference">SaasRuntimeUnitKindAppParamsScopeOutputReference</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: SaasRuntimeUnitKindAppParamsScope;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindAppParams;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParams">SaasRuntimeUnitKindAppParams</a>

---


### SaasRuntimeUnitKindAppParamsScopeOutputReference <a name="SaasRuntimeUnitKindAppParamsScopeOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindAppParamsScope;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindAppParamsScope">SaasRuntimeUnitKindAppParamsScope</a>

---


### SaasRuntimeUnitKindDependenciesList <a name="SaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get"></a>

```typescript
public get(index: number): SaasRuntimeUnitKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>[]

---


### SaasRuntimeUnitKindDependenciesOutputReference <a name="SaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">unitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">unitKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```typescript
public readonly unitKindInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindDependencies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindDependencies">SaasRuntimeUnitKindDependencies</a>

---


### SaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```typescript
public readonly outputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindInputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindInputVariableMappingsList <a name="SaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```typescript
public get(index: number): SaasRuntimeUnitKindInputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindInputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>[]

---


### SaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```typescript
public putFrom(value: SaasRuntimeUnitKindInputVariableMappingsFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```typescript
public putTo(value: SaasRuntimeUnitKindInputVariableMappingsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```typescript
public readonly from: SaasRuntimeUnitKindInputVariableMappingsFromOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFromOutputReference">SaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```typescript
public readonly to: SaasRuntimeUnitKindInputVariableMappingsToOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference">SaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: SaasRuntimeUnitKindInputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsFrom">SaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```typescript
public readonly toInput: SaasRuntimeUnitKindInputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindInputVariableMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappings">SaasRuntimeUnitKindInputVariableMappings</a>

---


### SaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```typescript
public resetIgnoreForLookup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```typescript
public readonly ignoreForLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```typescript
public readonly inputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindInputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindInputVariableMappingsTo">SaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```typescript
public readonly outputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindOutputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsList <a name="SaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```typescript
public get(index: number): SaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindOutputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>[]

---


### SaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```typescript
public putFrom(value: SaasRuntimeUnitKindOutputVariableMappingsFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```typescript
public putTo(value: SaasRuntimeUnitKindOutputVariableMappingsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```typescript
public readonly from: SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">SaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```typescript
public readonly to: SaasRuntimeUnitKindOutputVariableMappingsToOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference">SaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: SaasRuntimeUnitKindOutputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsFrom">SaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```typescript
public readonly toInput: SaasRuntimeUnitKindOutputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindOutputVariableMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappings">SaasRuntimeUnitKindOutputVariableMappings</a>

---


### SaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="SaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```typescript
public resetIgnoreForLookup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```typescript
public readonly ignoreForLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```typescript
public readonly inputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeUnitKindOutputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindOutputVariableMappingsTo">SaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### SaasRuntimeUnitKindTimeoutsOutputReference <a name="SaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeUnitKind } from '@cdktn/provider-google'

new saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeUnitKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeUnitKind.SaasRuntimeUnitKindTimeouts">SaasRuntimeUnitKindTimeouts</a>

---



