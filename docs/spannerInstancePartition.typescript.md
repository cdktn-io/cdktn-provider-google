# `spannerInstancePartition` Submodule <a name="`spannerInstancePartition` Submodule" id="@cdktn/provider-google.spannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerInstancePartition <a name="SpannerInstancePartition" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

new spannerInstancePartition.SpannerInstancePartition(scope: Construct, id: string, config: SpannerInstancePartitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig">SpannerInstancePartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig">SpannerInstancePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits">resetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig"></a>

```typescript
public putAutoscalingConfig(value: SpannerInstancePartitionAutoscalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts"></a>

```typescript
public putTimeouts(value: SpannerInstancePartitionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetAutoscalingConfig"></a>

```typescript
public resetAutoscalingConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```

##### `resetProcessingUnits` <a name="resetProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProcessingUnits"></a>

```typescript
public resetProcessingUnits(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

spannerInstancePartition.SpannerInstancePartition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

spannerInstancePartition.SpannerInstancePartition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

spannerInstancePartition.SpannerInstancePartition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

spannerInstancePartition.SpannerInstancePartition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SpannerInstancePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpannerInstancePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference">SpannerInstancePartitionAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput">processingUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits">processingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: SpannerInstancePartitionAutoscalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference">SpannerInstancePartitionAutoscalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeouts"></a>

```typescript
public readonly timeouts: SpannerInstancePartitionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference">SpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.autoscalingConfigInput"></a>

```typescript
public readonly autoscalingConfigInput: SpannerInstancePartitionAutoscalingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `processingUnitsInput`<sup>Optional</sup> <a name="processingUnitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnitsInput"></a>

```typescript
public readonly processingUnitsInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpannerInstancePartitionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `processingUnits`<sup>Required</sup> <a name="processingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.processingUnits"></a>

```typescript
public readonly processingUnits: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerInstancePartitionAutoscalingConfig <a name="SpannerInstancePartitionAutoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

const spannerInstancePartitionAutoscalingConfig: spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `autoscalingLimits`<sup>Optional</sup> <a name="autoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits"></a>

```typescript
public readonly autoscalingLimits: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#autoscaling_limits SpannerInstancePartition#autoscaling_limits}

---

##### `autoscalingTargets`<sup>Optional</sup> <a name="autoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets"></a>

```typescript
public readonly autoscalingTargets: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#autoscaling_targets SpannerInstancePartition#autoscaling_targets}

---

### SpannerInstancePartitionAutoscalingConfigAutoscalingLimits <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

const spannerInstancePartitionAutoscalingConfigAutoscalingLimits: spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes">maxNodes</a></code> | <code>number</code> | Specifies maximum number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>number</code> | Specifies maximum number of processing units allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes">minNodes</a></code> | <code>number</code> | Specifies number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">minProcessingUnits</a></code> | <code>number</code> | Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000. |

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

Specifies maximum number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#max_nodes SpannerInstancePartition#max_nodes}

---

##### `maxProcessingUnits`<sup>Optional</sup> <a name="maxProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```typescript
public readonly maxProcessingUnits: number;
```

- *Type:* number

Specifies maximum number of processing units allocated to the instance partition.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#max_processing_units SpannerInstancePartition#max_processing_units}

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

Specifies number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#min_nodes SpannerInstancePartition#min_nodes}

---

##### `minProcessingUnits`<sup>Optional</sup> <a name="minProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```typescript
public readonly minProcessingUnits: number;
```

- *Type:* number

Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#min_processing_units SpannerInstancePartition#min_processing_units}

---

### SpannerInstancePartitionAutoscalingConfigAutoscalingTargets <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

const spannerInstancePartitionAutoscalingConfigAutoscalingTargets: spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>number</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>number</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent">totalCpuUtilizationPercent</a></code> | <code>number</code> | Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |

---

##### `highPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```typescript
public readonly highPriorityCpuUtilizationPercent: number;
```

- *Type:* number

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#high_priority_cpu_utilization_percent SpannerInstancePartition#high_priority_cpu_utilization_percent}

---

##### `storageUtilizationPercent`<sup>Optional</sup> <a name="storageUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```typescript
public readonly storageUtilizationPercent: number;
```

- *Type:* number

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#storage_utilization_percent SpannerInstancePartition#storage_utilization_percent}

---

##### `totalCpuUtilizationPercent`<sup>Optional</sup> <a name="totalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent"></a>

```typescript
public readonly totalCpuUtilizationPercent: number;
```

- *Type:* number

Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#total_cpu_utilization_percent SpannerInstancePartition#total_cpu_utilization_percent}

---

### SpannerInstancePartitionConfig <a name="SpannerInstancePartitionConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

const spannerInstancePartitionConfig: spannerInstancePartition.SpannerInstancePartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config">config</a></code> | <code>string</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName">displayName</a></code> | <code>string</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance">instance</a></code> | <code>string</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits">processingUnits</a></code> | <code>number</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#config SpannerInstancePartition#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#display_name SpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#instance SpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#name SpannerInstancePartition#name}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: SpannerInstancePartitionAutoscalingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#autoscaling_config SpannerInstancePartition#autoscaling_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#deletion_policy SpannerInstancePartition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#id SpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#node_count SpannerInstancePartition#node_count}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.processingUnits"></a>

```typescript
public readonly processingUnits: number;
```

- *Type:* number

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#processing_units SpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#project SpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpannerInstancePartitionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#timeouts SpannerInstancePartition#timeouts}

---

### SpannerInstancePartitionTimeouts <a name="SpannerInstancePartitionTimeouts" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

const spannerInstancePartitionTimeouts: spannerInstancePartition.SpannerInstancePartitionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#create SpannerInstancePartition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#delete SpannerInstancePartition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/spanner_instance_partition#update SpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

new spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">resetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">resetMinProcessingUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```typescript
public resetMaxNodes(): void
```

##### `resetMaxProcessingUnits` <a name="resetMaxProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```typescript
public resetMaxProcessingUnits(): void
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```typescript
public resetMinNodes(): void
```

##### `resetMinProcessingUnits` <a name="resetMinProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```typescript
public resetMinProcessingUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">maxProcessingUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">minProcessingUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">minProcessingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `maxProcessingUnitsInput`<sup>Optional</sup> <a name="maxProcessingUnitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```typescript
public readonly maxProcessingUnitsInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `minProcessingUnitsInput`<sup>Optional</sup> <a name="minProcessingUnitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```typescript
public readonly minProcessingUnitsInput: number;
```

- *Type:* number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `maxProcessingUnits`<sup>Required</sup> <a name="maxProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```typescript
public readonly maxProcessingUnits: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `minProcessingUnits`<sup>Required</sup> <a name="minProcessingUnits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```typescript
public readonly minProcessingUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---


### SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference <a name="SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

new spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">resetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">resetStorageUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent">resetTotalCpuUtilizationPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHighPriorityCpuUtilizationPercent` <a name="resetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```typescript
public resetHighPriorityCpuUtilizationPercent(): void
```

##### `resetStorageUtilizationPercent` <a name="resetStorageUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```typescript
public resetStorageUtilizationPercent(): void
```

##### `resetTotalCpuUtilizationPercent` <a name="resetTotalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent"></a>

```typescript
public resetTotalCpuUtilizationPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">highPriorityCpuUtilizationPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storageUtilizationPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput">totalCpuUtilizationPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent">totalCpuUtilizationPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `highPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```typescript
public readonly highPriorityCpuUtilizationPercentInput: number;
```

- *Type:* number

---

##### `storageUtilizationPercentInput`<sup>Optional</sup> <a name="storageUtilizationPercentInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```typescript
public readonly storageUtilizationPercentInput: number;
```

- *Type:* number

---

##### `totalCpuUtilizationPercentInput`<sup>Optional</sup> <a name="totalCpuUtilizationPercentInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput"></a>

```typescript
public readonly totalCpuUtilizationPercentInput: number;
```

- *Type:* number

---

##### `highPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```typescript
public readonly highPriorityCpuUtilizationPercent: number;
```

- *Type:* number

---

##### `storageUtilizationPercent`<sup>Required</sup> <a name="storageUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```typescript
public readonly storageUtilizationPercent: number;
```

- *Type:* number

---

##### `totalCpuUtilizationPercent`<sup>Required</sup> <a name="totalCpuUtilizationPercent" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent"></a>

```typescript
public readonly totalCpuUtilizationPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---


### SpannerInstancePartitionAutoscalingConfigOutputReference <a name="SpannerInstancePartitionAutoscalingConfigOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

new spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits">putAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets">putAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits">resetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets">resetAutoscalingTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingLimits` <a name="putAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```typescript
public putAutoscalingLimits(value: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `putAutoscalingTargets` <a name="putAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```typescript
public putAutoscalingTargets(value: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `resetAutoscalingLimits` <a name="resetAutoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```typescript
public resetAutoscalingLimits(): void
```

##### `resetAutoscalingTargets` <a name="resetAutoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```typescript
public resetAutoscalingTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscalingLimitsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscalingTargetsInput</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```typescript
public readonly autoscalingLimits: SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscalingTargets`<sup>Required</sup> <a name="autoscalingTargets" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```typescript
public readonly autoscalingTargets: SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">SpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `autoscalingLimitsInput`<sup>Optional</sup> <a name="autoscalingLimitsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```typescript
public readonly autoscalingLimitsInput: SpannerInstancePartitionAutoscalingConfigAutoscalingLimits;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingLimits">SpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscalingTargetsInput`<sup>Optional</sup> <a name="autoscalingTargetsInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```typescript
public readonly autoscalingTargetsInput: SpannerInstancePartitionAutoscalingConfigAutoscalingTargets;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigAutoscalingTargets">SpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpannerInstancePartitionAutoscalingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionAutoscalingConfig">SpannerInstancePartitionAutoscalingConfig</a>

---


### SpannerInstancePartitionTimeoutsOutputReference <a name="SpannerInstancePartitionTimeoutsOutputReference" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```typescript
import { spannerInstancePartition } from '@cdktn/provider-google'

new spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpannerInstancePartitionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.spannerInstancePartition.SpannerInstancePartitionTimeouts">SpannerInstancePartitionTimeouts</a>

---



