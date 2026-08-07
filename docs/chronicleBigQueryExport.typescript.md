# `chronicleBigQueryExport` Submodule <a name="`chronicleBigQueryExport` Submodule" id="@cdktn/provider-google.chronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleBigQueryExport <a name="ChronicleBigQueryExport" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExport(scope: Construct, id: string, config: ChronicleBigQueryExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig">ChronicleBigQueryExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig">ChronicleBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings">putEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings">putIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings">putRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings">putUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings">putUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetBigQueryExportPackage">resetBigQueryExportPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetEntityGraphSettings">resetEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetIocMatchesSettings">resetIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetRuleDetectionsSettings">resetRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsAggregatesSettings">resetUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsSettings">resetUdmEventsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityGraphSettings` <a name="putEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings"></a>

```typescript
public putEntityGraphSettings(value: ChronicleBigQueryExportEntityGraphSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putEntityGraphSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---

##### `putIocMatchesSettings` <a name="putIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings"></a>

```typescript
public putIocMatchesSettings(value: ChronicleBigQueryExportIocMatchesSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putIocMatchesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---

##### `putRuleDetectionsSettings` <a name="putRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```typescript
public putRuleDetectionsSettings(value: ChronicleBigQueryExportRuleDetectionsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putRuleDetectionsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts"></a>

```typescript
public putTimeouts(value: ChronicleBigQueryExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---

##### `putUdmEventsAggregatesSettings` <a name="putUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```typescript
public putUdmEventsAggregatesSettings(value: ChronicleBigQueryExportUdmEventsAggregatesSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `putUdmEventsSettings` <a name="putUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings"></a>

```typescript
public putUdmEventsSettings(value: ChronicleBigQueryExportUdmEventsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.putUdmEventsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---

##### `resetBigQueryExportPackage` <a name="resetBigQueryExportPackage" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```typescript
public resetBigQueryExportPackage(): void
```

##### `resetEntityGraphSettings` <a name="resetEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetEntityGraphSettings"></a>

```typescript
public resetEntityGraphSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIocMatchesSettings` <a name="resetIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetIocMatchesSettings"></a>

```typescript
public resetIocMatchesSettings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuleDetectionsSettings` <a name="resetRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```typescript
public resetRuleDetectionsSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUdmEventsAggregatesSettings` <a name="resetUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```typescript
public resetUdmEventsAggregatesSettings(): void
```

##### `resetUdmEventsSettings` <a name="resetUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.resetUdmEventsSettings"></a>

```typescript
public resetUdmEventsSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChronicleBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference">ChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference">ChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioned">provisioned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference">ChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference">ChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference">ChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackageInput">bigQueryExportPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettingsInput">entityGraphSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettingsInput">iocMatchesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettingsInput">ruleDetectionsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">udmEventsAggregatesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettingsInput">udmEventsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entityGraphSettings`<sup>Required</sup> <a name="entityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettings"></a>

```typescript
public readonly entityGraphSettings: ChronicleBigQueryExportEntityGraphSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference">ChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `iocMatchesSettings`<sup>Required</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettings"></a>

```typescript
public readonly iocMatchesSettings: ChronicleBigQueryExportIocMatchesSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference">ChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.provisioned"></a>

```typescript
public readonly provisioned: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ruleDetectionsSettings`<sup>Required</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```typescript
public readonly ruleDetectionsSettings: ChronicleBigQueryExportRuleDetectionsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference">ChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleBigQueryExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference">ChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `udmEventsAggregatesSettings`<sup>Required</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```typescript
public readonly udmEventsAggregatesSettings: ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `udmEventsSettings`<sup>Required</sup> <a name="udmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettings"></a>

```typescript
public readonly udmEventsSettings: ChronicleBigQueryExportUdmEventsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference">ChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `bigQueryExportPackageInput`<sup>Optional</sup> <a name="bigQueryExportPackageInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```typescript
public readonly bigQueryExportPackageInput: string;
```

- *Type:* string

---

##### `entityGraphSettingsInput`<sup>Optional</sup> <a name="entityGraphSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```typescript
public readonly entityGraphSettingsInput: ChronicleBigQueryExportEntityGraphSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `iocMatchesSettingsInput`<sup>Optional</sup> <a name="iocMatchesSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```typescript
public readonly iocMatchesSettingsInput: ChronicleBigQueryExportIocMatchesSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ruleDetectionsSettingsInput`<sup>Optional</sup> <a name="ruleDetectionsSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```typescript
public readonly ruleDetectionsSettingsInput: ChronicleBigQueryExportRuleDetectionsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ChronicleBigQueryExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---

##### `udmEventsAggregatesSettingsInput`<sup>Optional</sup> <a name="udmEventsAggregatesSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```typescript
public readonly udmEventsAggregatesSettingsInput: ChronicleBigQueryExportUdmEventsAggregatesSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `udmEventsSettingsInput`<sup>Optional</sup> <a name="udmEventsSettingsInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```typescript
public readonly udmEventsSettingsInput: ChronicleBigQueryExportUdmEventsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---

##### `bigQueryExportPackage`<sup>Required</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```typescript
public readonly bigQueryExportPackage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleBigQueryExportConfig <a name="ChronicleBigQueryExportConfig" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportConfig: chronicleBigQueryExport.ChronicleBigQueryExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>string</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#instance ChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#location ChronicleBigQueryExport#location}

---

##### `bigQueryExportPackage`<sup>Optional</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```typescript
public readonly bigQueryExportPackage: string;
```

- *Type:* string

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#big_query_export_package ChronicleBigQueryExport#big_query_export_package}

---

##### `entityGraphSettings`<sup>Optional</sup> <a name="entityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```typescript
public readonly entityGraphSettings: ChronicleBigQueryExportEntityGraphSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#entity_graph_settings ChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#id ChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iocMatchesSettings`<sup>Optional</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```typescript
public readonly iocMatchesSettings: ChronicleBigQueryExportIocMatchesSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#ioc_matches_settings ChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#project ChronicleBigQueryExport#project}.

---

##### `ruleDetectionsSettings`<sup>Optional</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```typescript
public readonly ruleDetectionsSettings: ChronicleBigQueryExportRuleDetectionsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#rule_detections_settings ChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ChronicleBigQueryExportTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#timeouts ChronicleBigQueryExport#timeouts}

---

##### `udmEventsAggregatesSettings`<sup>Optional</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```typescript
public readonly udmEventsAggregatesSettings: ChronicleBigQueryExportUdmEventsAggregatesSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#udm_events_aggregates_settings ChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udmEventsSettings`<sup>Optional</sup> <a name="udmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```typescript
public readonly udmEventsSettings: ChronicleBigQueryExportUdmEventsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#udm_events_settings ChronicleBigQueryExport#udm_events_settings}

---

### ChronicleBigQueryExportEntityGraphSettings <a name="ChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportEntityGraphSettings: chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportIocMatchesSettings <a name="ChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportIocMatchesSettings: chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportRuleDetectionsSettings <a name="ChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportRuleDetectionsSettings: chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportTimeouts <a name="ChronicleBigQueryExportTimeouts" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportTimeouts: chronicleBigQueryExport.ChronicleBigQueryExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#create ChronicleBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#delete ChronicleBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#update ChronicleBigQueryExport#update}.

---

### ChronicleBigQueryExportUdmEventsAggregatesSettings <a name="ChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportUdmEventsAggregatesSettings: chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

### ChronicleBigQueryExportUdmEventsSettings <a name="ChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

const chronicleBigQueryExportUdmEventsSettings: chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#enabled ChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_big_query_export#retention_days ChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="ChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleBigQueryExportEntityGraphSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportEntityGraphSettings">ChronicleBigQueryExportEntityGraphSettings</a>

---


### ChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="ChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleBigQueryExportIocMatchesSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportIocMatchesSettings">ChronicleBigQueryExportIocMatchesSettings</a>

---


### ChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="ChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleBigQueryExportRuleDetectionsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportRuleDetectionsSettings">ChronicleBigQueryExportRuleDetectionsSettings</a>

---


### ChronicleBigQueryExportTimeoutsOutputReference <a name="ChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChronicleBigQueryExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportTimeouts">ChronicleBigQueryExportTimeouts</a>

---


### ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleBigQueryExportUdmEventsAggregatesSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsAggregatesSettings">ChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### ChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="ChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```typescript
import { chronicleBigQueryExport } from '@cdktn/provider-google'

new chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChronicleBigQueryExportUdmEventsSettings;
```

- *Type:* <a href="#@cdktn/provider-google.chronicleBigQueryExport.ChronicleBigQueryExportUdmEventsSettings">ChronicleBigQueryExportUdmEventsSettings</a>

---



