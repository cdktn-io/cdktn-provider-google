# `saasRuntimeRolloutKind` Submodule <a name="`saasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google.saasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRolloutKind <a name="SaasRuntimeRolloutKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

new saasRuntimeRolloutKind.SaasRuntimeRolloutKind(scope: Construct, id: string, config: SaasRuntimeRolloutKindConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig">SaasRuntimeRolloutKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig">SaasRuntimeRolloutKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget">putErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget">resetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">resetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter">resetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">resetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorBudget` <a name="putErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget"></a>

```typescript
public putErrorBudget(value: SaasRuntimeRolloutKindErrorBudget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts"></a>

```typescript
public putTimeouts(value: SaasRuntimeRolloutKindTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetErrorBudget` <a name="resetErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget"></a>

```typescript
public resetErrorBudget(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRolloutOrchestrationStrategy` <a name="resetRolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```typescript
public resetRolloutOrchestrationStrategy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnitFilter` <a name="resetUnitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter"></a>

```typescript
public resetUnitFilter(): void
```

##### `resetUpdateUnitKindStrategy` <a name="resetUpdateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```typescript
public resetUpdateUnitKindStrategy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeRolloutKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput">errorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput">rolloutKindIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">rolloutOrchestrationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput">unitFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput">unitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">updateUnitKindStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId">rolloutKindId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter">unitFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind">unitKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `errorBudget`<sup>Required</sup> <a name="errorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget"></a>

```typescript
public readonly errorBudget: SaasRuntimeRolloutKindErrorBudgetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeRolloutKindTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `errorBudgetInput`<sup>Optional</sup> <a name="errorBudgetInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```typescript
public readonly errorBudgetInput: SaasRuntimeRolloutKindErrorBudget;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rolloutKindIdInput`<sup>Optional</sup> <a name="rolloutKindIdInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```typescript
public readonly rolloutKindIdInput: string;
```

- *Type:* string

---

##### `rolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="rolloutOrchestrationStrategyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```typescript
public readonly rolloutOrchestrationStrategyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SaasRuntimeRolloutKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---

##### `unitFilterInput`<sup>Optional</sup> <a name="unitFilterInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput"></a>

```typescript
public readonly unitFilterInput: string;
```

- *Type:* string

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput"></a>

```typescript
public readonly unitKindInput: string;
```

- *Type:* string

---

##### `updateUnitKindStrategyInput`<sup>Optional</sup> <a name="updateUnitKindStrategyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```typescript
public readonly updateUnitKindStrategyInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId"></a>

```typescript
public readonly rolloutKindId: string;
```

- *Type:* string

---

##### `rolloutOrchestrationStrategy`<sup>Required</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```typescript
public readonly rolloutOrchestrationStrategy: string;
```

- *Type:* string

---

##### `unitFilter`<sup>Required</sup> <a name="unitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter"></a>

```typescript
public readonly unitFilter: string;
```

- *Type:* string

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

---

##### `updateUnitKindStrategy`<sup>Required</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```typescript
public readonly updateUnitKindStrategy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeRolloutKindConfig <a name="SaasRuntimeRolloutKindConfig" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.Initializer"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

const saasRuntimeRolloutKindConfig: saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId">rolloutKindId</a></code> | <code>string</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind">unitKind</a></code> | <code>string</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget">errorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">rolloutOrchestrationStrategy</a></code> | <code>string</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter">unitFilter</a></code> | <code>string</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">updateUnitKindStrategy</a></code> | <code>string</code> | The config for updating the unit kind. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}

---

##### `rolloutKindId`<sup>Required</sup> <a name="rolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```typescript
public readonly rolloutKindId: string;
```

- *Type:* string

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}

---

##### `errorBudget`<sup>Optional</sup> <a name="errorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```typescript
public readonly errorBudget: SaasRuntimeRolloutKindErrorBudget;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}.

---

##### `rolloutOrchestrationStrategy`<sup>Optional</sup> <a name="rolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```typescript
public readonly rolloutOrchestrationStrategy: string;
```

- *Type:* string

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.
- "Google.Cloud.Simple.AllAtOnce"
- "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SaasRuntimeRolloutKindTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}

---

##### `unitFilter`<sup>Optional</sup> <a name="unitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```typescript
public readonly unitFilter: string;
```

- *Type:* string

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}

---

##### `updateUnitKindStrategy`<sup>Optional</sup> <a name="updateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```typescript
public readonly updateUnitKindStrategy: string;
```

- *Type:* string

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### SaasRuntimeRolloutKindErrorBudget <a name="SaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

const saasRuntimeRolloutKindErrorBudget: saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount">allowedCount</a></code> | <code>number</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">allowedPercentage</a></code> | <code>number</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `allowedCount`<sup>Optional</sup> <a name="allowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```typescript
public readonly allowedCount: number;
```

- *Type:* number

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_count SaasRuntimeRolloutKind#allowed_count}

---

##### `allowedPercentage`<sup>Optional</sup> <a name="allowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```typescript
public readonly allowedPercentage: number;
```

- *Type:* number

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_percentage SaasRuntimeRolloutKind#allowed_percentage}

---

### SaasRuntimeRolloutKindTimeouts <a name="SaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.Initializer"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

const saasRuntimeRolloutKindTimeouts: saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeRolloutKindErrorBudgetOutputReference <a name="SaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

new saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">resetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">resetAllowedPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCount` <a name="resetAllowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```typescript
public resetAllowedCount(): void
```

##### `resetAllowedPercentage` <a name="resetAllowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```typescript
public resetAllowedPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">allowedCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">allowedPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">allowedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">allowedPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedCountInput`<sup>Optional</sup> <a name="allowedCountInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```typescript
public readonly allowedCountInput: number;
```

- *Type:* number

---

##### `allowedPercentageInput`<sup>Optional</sup> <a name="allowedPercentageInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```typescript
public readonly allowedPercentageInput: number;
```

- *Type:* number

---

##### `allowedCount`<sup>Required</sup> <a name="allowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```typescript
public readonly allowedCount: number;
```

- *Type:* number

---

##### `allowedPercentage`<sup>Required</sup> <a name="allowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```typescript
public readonly allowedPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SaasRuntimeRolloutKindErrorBudget;
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---


### SaasRuntimeRolloutKindTimeoutsOutputReference <a name="SaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```typescript
import { saasRuntimeRolloutKind } from '@cdktn/provider-google'

new saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SaasRuntimeRolloutKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---



