# `chronicleNativeDashboard` Submodule <a name="`chronicleNativeDashboard` Submodule" id="@cdktn/provider-google.chronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleNativeDashboard <a name="ChronicleNativeDashboard" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboard(scope: Construct, id: string, config: ChronicleNativeDashboardConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig">ChronicleNativeDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig">ChronicleNativeDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts">putCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts">resetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned">resetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCharts` <a name="putCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts"></a>

```typescript
public putCharts(value: IResolvable | ChronicleNativeDashboardCharts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters"></a>

```typescript
public putFilters(value: IResolvable | ChronicleNativeDashboardFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleNativeDashboardTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `resetAccess` <a name="resetAccess" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetCharts` <a name="resetCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts"></a>

```typescript
public resetCharts(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsPinned` <a name="resetIsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned"></a>

```typescript
public resetIsPinned(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleNativeDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts">charts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId">createUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId">dashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime">lastViewedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId">updateUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput">accessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput">chartsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput">filtersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput">isPinnedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned">isPinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `charts`<sup>Required</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts"></a>

```typescript
public readonly charts: ChronicleNativeDashboardChartsList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `createUserId`<sup>Required</sup> <a name="createUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId"></a>

```typescript
public readonly createUserId: string;
```

- *Type:* string

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters"></a>

```typescript
public readonly filters: ChronicleNativeDashboardFiltersList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `lastViewedTime`<sup>Required</sup> <a name="lastViewedTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime"></a>

```typescript
public readonly lastViewedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleNativeDashboardTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `updateUserId`<sup>Required</sup> <a name="updateUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId"></a>

```typescript
public readonly updateUserId: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* string

---

##### `chartsInput`<sup>Optional</sup> <a name="chartsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput"></a>

```typescript
public readonly chartsInput: IResolvable | ChronicleNativeDashboardCharts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput"></a>

```typescript
public readonly filtersInput: IResolvable | ChronicleNativeDashboardFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `isPinnedInput`<sup>Optional</sup> <a name="isPinnedInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput"></a>

```typescript
public readonly isPinnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleNativeDashboardTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `isPinned`<sup>Required</sup> <a name="isPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned"></a>

```typescript
public readonly isPinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleNativeDashboardCharts <a name="ChronicleNativeDashboardCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

const chronicleNativeDashboardCharts: chronicleNativeDashboard.ChronicleNativeDashboardCharts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart">dashboardChart</a></code> | <code>string</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds">filtersIds</a></code> | <code>string[]</code> | List of dashboard filter IDs applied to this chart. |

---

##### `chartLayout`<sup>Optional</sup> <a name="chartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout"></a>

```typescript
public readonly chartLayout: ChronicleNativeDashboardChartsChartLayout;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#chart_layout ChronicleNativeDashboard#chart_layout}

---

##### `dashboardChart`<sup>Optional</sup> <a name="dashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart"></a>

```typescript
public readonly dashboardChart: string;
```

- *Type:* string

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#dashboard_chart ChronicleNativeDashboard#dashboard_chart}

---

##### `filtersIds`<sup>Optional</sup> <a name="filtersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds"></a>

```typescript
public readonly filtersIds: string[];
```

- *Type:* string[]

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filters_ids ChronicleNativeDashboard#filters_ids}

---

### ChronicleNativeDashboardChartsChartLayout <a name="ChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

const chronicleNativeDashboardChartsChartLayout: chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX">spanX</a></code> | <code>number</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY">spanY</a></code> | <code>number</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX">startX</a></code> | <code>number</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY">startY</a></code> | <code>number</code> | The starting Y coordinate. |

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```typescript
public readonly spanX: number;
```

- *Type:* number

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```typescript
public readonly spanY: number;
```

- *Type:* number

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}

---

##### `startX`<sup>Optional</sup> <a name="startX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```typescript
public readonly startX: number;
```

- *Type:* number

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}

---

##### `startY`<sup>Optional</sup> <a name="startY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```typescript
public readonly startY: number;
```

- *Type:* number

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}

---

### ChronicleNativeDashboardConfig <a name="ChronicleNativeDashboardConfig" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

const chronicleNativeDashboardConfig: chronicleNativeDashboard.ChronicleNativeDashboardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance">instance</a></code> | <code>string</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location">location</a></code> | <code>string</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access">access</a></code> | <code>string</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts">charts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]</code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description">description</a></code> | <code>string</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters">filters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]</code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned">isPinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type">type</a></code> | <code>string</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `charts`<sup>Optional</sup> <a name="charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts"></a>

```typescript
public readonly charts: IResolvable | ChronicleNativeDashboardCharts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters"></a>

```typescript
public readonly filters: IResolvable | ChronicleNativeDashboardFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isPinned`<sup>Optional</sup> <a name="isPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned"></a>

```typescript
public readonly isPinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleNativeDashboardTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

### ChronicleNativeDashboardFilters <a name="ChronicleNativeDashboardFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

const chronicleNativeDashboardFilters: chronicleNativeDashboard.ChronicleNativeDashboardFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds">chartIds</a></code> | <code>string[]</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource">dataSource</a></code> | <code>string</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName">displayName</a></code> | <code>string</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath">fieldPath</a></code> | <code>string</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id">id</a></code> | <code>string</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory">isMandatory</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `chartIds`<sup>Optional</sup> <a name="chartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds"></a>

```typescript
public readonly chartIds: string[];
```

- *Type:* string[]

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#chart_ids ChronicleNativeDashboard#chart_ids}

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#data_source ChronicleNativeDashboard#data_source}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#field_path ChronicleNativeDashboard#field_path}

---

##### `filterOperatorAndFieldValues`<sup>Optional</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```typescript
public readonly filterOperatorAndFieldValues: IResolvable | ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filter_operator_and_field_values ChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMandatory`<sup>Optional</sup> <a name="isMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory"></a>

```typescript
public readonly isMandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_mandatory ChronicleNativeDashboard#is_mandatory}

---

##### `isStandardTimeRangeFilter`<sup>Optional</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```typescript
public readonly isStandardTimeRangeFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter ChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `isStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```typescript
public readonly isStandardTimeRangeFilterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter_enabled ChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

const chronicleNativeDashboardFiltersFilterOperatorAndFieldValues: chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">fieldValues</a></code> | <code>string[]</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">filterOperator</a></code> | <code>string</code> | The operator to apply to the field. |

---

##### `fieldValues`<sup>Optional</sup> <a name="fieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```typescript
public readonly fieldValues: string[];
```

- *Type:* string[]

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#field_values ChronicleNativeDashboard#field_values}

---

##### `filterOperator`<sup>Optional</sup> <a name="filterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```typescript
public readonly filterOperator: string;
```

- *Type:* string

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filter_operator ChronicleNativeDashboard#filter_operator}

---

### ChronicleNativeDashboardTimeouts <a name="ChronicleNativeDashboardTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

const chronicleNativeDashboardTimeouts: chronicleNativeDashboard.ChronicleNativeDashboardTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleNativeDashboardChartsChartLayoutOutputReference <a name="ChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">resetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">resetStartY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartX` <a name="resetStartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```typescript
public resetStartX(): void
```

##### `resetStartY` <a name="resetStartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```typescript
public resetStartY(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">spanXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">spanYInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">startXInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">startYInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">spanX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">spanY</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">startX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">startY</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spanXInput`<sup>Optional</sup> <a name="spanXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```typescript
public readonly spanXInput: number;
```

- *Type:* number

---

##### `spanYInput`<sup>Optional</sup> <a name="spanYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```typescript
public readonly spanYInput: number;
```

- *Type:* number

---

##### `startXInput`<sup>Optional</sup> <a name="startXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```typescript
public readonly startXInput: number;
```

- *Type:* number

---

##### `startYInput`<sup>Optional</sup> <a name="startYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```typescript
public readonly startYInput: number;
```

- *Type:* number

---

##### `spanX`<sup>Required</sup> <a name="spanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```typescript
public readonly spanX: number;
```

- *Type:* number

---

##### `spanY`<sup>Required</sup> <a name="spanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```typescript
public readonly spanY: number;
```

- *Type:* number

---

##### `startX`<sup>Required</sup> <a name="startX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```typescript
public readonly startX: number;
```

- *Type:* number

---

##### `startY`<sup>Required</sup> <a name="startY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```typescript
public readonly startY: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleNativeDashboardChartsChartLayout;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---


### ChronicleNativeDashboardChartsList <a name="ChronicleNativeDashboardChartsList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardChartsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get"></a>

```typescript
public get(index: number): ChronicleNativeDashboardChartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardCharts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>[]

---


### ChronicleNativeDashboardChartsOutputReference <a name="ChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout">putChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout">resetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart">resetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds">resetFiltersIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChartLayout` <a name="putChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```typescript
public putChartLayout(value: ChronicleNativeDashboardChartsChartLayout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `resetChartLayout` <a name="resetChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```typescript
public resetChartLayout(): void
```

##### `resetDashboardChart` <a name="resetDashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```typescript
public resetDashboardChart(): void
```

##### `resetFiltersIds` <a name="resetFiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```typescript
public resetFiltersIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout">chartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">chartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">dashboardChartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">filtersIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart">dashboardChart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds">filtersIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chartLayout`<sup>Required</sup> <a name="chartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```typescript
public readonly chartLayout: ChronicleNativeDashboardChartsChartLayoutOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `chartLayoutInput`<sup>Optional</sup> <a name="chartLayoutInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```typescript
public readonly chartLayoutInput: ChronicleNativeDashboardChartsChartLayout;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `dashboardChartInput`<sup>Optional</sup> <a name="dashboardChartInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```typescript
public readonly dashboardChartInput: string;
```

- *Type:* string

---

##### `filtersIdsInput`<sup>Optional</sup> <a name="filtersIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```typescript
public readonly filtersIdsInput: string[];
```

- *Type:* string[]

---

##### `dashboardChart`<sup>Required</sup> <a name="dashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```typescript
public readonly dashboardChart: string;
```

- *Type:* string

---

##### `filtersIds`<sup>Required</sup> <a name="filtersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```typescript
public readonly filtersIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardCharts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts">ChronicleNativeDashboardCharts</a>

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```typescript
public get(index: number): ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">resetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">resetFilterOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldValues` <a name="resetFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```typescript
public resetFieldValues(): void
```

##### `resetFilterOperator` <a name="resetFilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```typescript
public resetFilterOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">fieldValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">filterOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">fieldValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">filterOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldValuesInput`<sup>Optional</sup> <a name="fieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```typescript
public readonly fieldValuesInput: string[];
```

- *Type:* string[]

---

##### `filterOperatorInput`<sup>Optional</sup> <a name="filterOperatorInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```typescript
public readonly filterOperatorInput: string;
```

- *Type:* string

---

##### `fieldValues`<sup>Required</sup> <a name="fieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```typescript
public readonly fieldValues: string[];
```

- *Type:* string[]

---

##### `filterOperator`<sup>Required</sup> <a name="filterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```typescript
public readonly filterOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### ChronicleNativeDashboardFiltersList <a name="ChronicleNativeDashboardFiltersList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get"></a>

```typescript
public get(index: number): ChronicleNativeDashboardFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>[]

---


### ChronicleNativeDashboardFiltersOutputReference <a name="ChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">putFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds">resetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">resetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">resetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">resetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">resetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterOperatorAndFieldValues` <a name="putFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```typescript
public putFilterOperatorAndFieldValues(value: IResolvable | ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `resetChartIds` <a name="resetChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```typescript
public resetChartIds(): void
```

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```typescript
public resetFieldPath(): void
```

##### `resetFilterOperatorAndFieldValues` <a name="resetFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```typescript
public resetFilterOperatorAndFieldValues(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsMandatory` <a name="resetIsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```typescript
public resetIsMandatory(): void
```

##### `resetIsStandardTimeRangeFilter` <a name="resetIsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```typescript
public resetIsStandardTimeRangeFilter(): void
```

##### `resetIsStandardTimeRangeFilterEnabled` <a name="resetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```typescript
public resetIsStandardTimeRangeFilterEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">filterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">chartIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">filterOperatorAndFieldValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">isMandatoryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">isStandardTimeRangeFilterEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">isStandardTimeRangeFilterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds">chartIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory">isMandatory</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">isStandardTimeRangeFilter</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">isStandardTimeRangeFilterEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterOperatorAndFieldValues`<sup>Required</sup> <a name="filterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```typescript
public readonly filterOperatorAndFieldValues: ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `chartIdsInput`<sup>Optional</sup> <a name="chartIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```typescript
public readonly chartIdsInput: string[];
```

- *Type:* string[]

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `filterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="filterOperatorAndFieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```typescript
public readonly filterOperatorAndFieldValuesInput: IResolvable | ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isMandatoryInput`<sup>Optional</sup> <a name="isMandatoryInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```typescript
public readonly isMandatoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```typescript
public readonly isStandardTimeRangeFilterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="isStandardTimeRangeFilterInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```typescript
public readonly isStandardTimeRangeFilterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `chartIds`<sup>Required</sup> <a name="chartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```typescript
public readonly chartIds: string[];
```

- *Type:* string[]

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatory`<sup>Required</sup> <a name="isMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```typescript
public readonly isMandatory: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilter`<sup>Required</sup> <a name="isStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```typescript
public readonly isStandardTimeRangeFilter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="isStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```typescript
public readonly isStandardTimeRangeFilterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters">ChronicleNativeDashboardFilters</a>

---


### ChronicleNativeDashboardTimeoutsOutputReference <a name="ChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleNativeDashboard } from '@cdktn/provider-google'

new chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleNativeDashboardTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---



