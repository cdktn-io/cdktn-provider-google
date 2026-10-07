# `monitoringSnooze` Submodule <a name="`monitoringSnooze` Submodule" id="@cdktn/provider-google.monitoringSnooze"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringSnooze <a name="MonitoringSnooze" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze google_monitoring_snooze}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

new monitoringSnooze.MonitoringSnooze(scope: Construct, id: string, config: MonitoringSnoozeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig">MonitoringSnoozeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig">MonitoringSnoozeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria"></a>

```typescript
public putCriteria(value: MonitoringSnoozeCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `putInterval` <a name="putInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval"></a>

```typescript
public putInterval(value: MonitoringSnoozeInterval): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitoringSnoozeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

monitoringSnooze.MonitoringSnooze.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

monitoringSnooze.MonitoringSnooze.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

monitoringSnooze.MonitoringSnooze.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

monitoringSnooze.MonitoringSnooze.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MonitoringSnooze resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringSnooze to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringSnooze that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MonitoringSnooze to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteria"></a>

```typescript
public readonly criteria: MonitoringSnoozeCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference">MonitoringSnoozeCriteriaOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.interval"></a>

```typescript
public readonly interval: MonitoringSnoozeIntervalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference">MonitoringSnoozeIntervalOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringSnoozeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference">MonitoringSnoozeTimeoutsOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: MonitoringSnoozeCriteria;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.intervalInput"></a>

```typescript
public readonly intervalInput: MonitoringSnoozeInterval;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitoringSnoozeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnooze.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringSnoozeConfig <a name="MonitoringSnoozeConfig" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

const monitoringSnoozeConfig: monitoringSnooze.MonitoringSnoozeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName">displayName</a></code> | <code>string</code> | A display name for the Snooze. This can be, at most, 512 unicode characters. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | interval block. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.criteria"></a>

```typescript
public readonly criteria: MonitoringSnoozeCriteria;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#criteria MonitoringSnooze#criteria}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A display name for the Snooze. This can be, at most, 512 unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#display_name MonitoringSnooze#display_name}

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.interval"></a>

```typescript
public readonly interval: MonitoringSnoozeInterval;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#interval MonitoringSnooze#interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#id MonitoringSnooze#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#project MonitoringSnooze#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitoringSnoozeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#timeouts MonitoringSnooze#timeouts}

---

### MonitoringSnoozeCriteria <a name="MonitoringSnoozeCriteria" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

const monitoringSnoozeCriteria: monitoringSnooze.MonitoringSnoozeCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter">filter</a></code> | <code>string</code> | When you define a snooze, you can also define a filter for that snooze. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies">policies</a></code> | <code>string[]</code> | The specific AlertPolicy names for the alert that should be snoozed. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

When you define a snooze, you can also define a filter for that snooze.

The filter is a string containing one or more key-value pairs. The string
uses the standard https://google.aip.dev/160 filter syntax. If you define
a filter for a snooze, then the snooze can only apply to one alert policy.
When the snooze is active, incidents won't be created when the incident
would have key-value pairs (labels) that match those specified by the
filter in the snooze.

Snooze filters support resource, metric, and metadata labels. If multiple
labels are used, then they must be connected with an AND operator. For
example, the following filter applies the snooze to incidents that have a
resource label with an instance ID of 1234567890, a metric label with an
instance name of test_group, a metadata user label with a key of foo and a
value of bar, and a metadata system label with a key of region and a value
of us-central1:

"filter": "resource.labels.instance_id=\"1234567890\" AND metric.labels.instance_name=\"test_group\" AND metadata.user_labels.foo=\"bar\" AND metadata.system_labels.region=\"us-central1\""

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#filter MonitoringSnooze#filter}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

The specific AlertPolicy names for the alert that should be snoozed.

The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]
There is a limit of 16 policies per snooze. This limit is checked during
snooze creation. Exactly 1 alert policy is required if filter is specified
at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#policies MonitoringSnooze#policies}

---

### MonitoringSnoozeInterval <a name="MonitoringSnoozeInterval" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

const monitoringSnoozeInterval: monitoringSnooze.MonitoringSnoozeInterval = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime">endTime</a></code> | <code>string</code> | The end of the time interval. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime">startTime</a></code> | <code>string</code> | The beginning of the time interval. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The end of the time interval.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#end_time MonitoringSnooze#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The beginning of the time interval.

The default value for the start time
is the end time. The start time must not be later than the end time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#start_time MonitoringSnooze#start_time}

---

### MonitoringSnoozeTimeouts <a name="MonitoringSnoozeTimeouts" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

const monitoringSnoozeTimeouts: monitoringSnooze.MonitoringSnoozeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#create MonitoringSnooze#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#delete MonitoringSnooze#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/monitoring_snooze#update MonitoringSnooze#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringSnoozeCriteriaOutputReference <a name="MonitoringSnoozeCriteriaOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

new monitoringSnooze.MonitoringSnoozeCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.resetPolicies"></a>

```typescript
public resetPolicies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringSnoozeCriteria;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeCriteria">MonitoringSnoozeCriteria</a>

---


### MonitoringSnoozeIntervalOutputReference <a name="MonitoringSnoozeIntervalOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

new monitoringSnooze.MonitoringSnoozeIntervalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeIntervalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitoringSnoozeInterval;
```

- *Type:* <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeInterval">MonitoringSnoozeInterval</a>

---


### MonitoringSnoozeTimeoutsOutputReference <a name="MonitoringSnoozeTimeoutsOutputReference" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitoringSnooze } from '@cdktn/provider-google'

new monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitoringSnoozeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.monitoringSnooze.MonitoringSnoozeTimeouts">MonitoringSnoozeTimeouts</a>

---



