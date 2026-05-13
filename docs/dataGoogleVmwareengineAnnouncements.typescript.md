# `dataGoogleVmwareengineAnnouncements` Submodule <a name="`dataGoogleVmwareengineAnnouncements` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineAnnouncements <a name="DataGoogleVmwareengineAnnouncements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vmwareengine_announcements google_vmwareengine_announcements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

new dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements(scope: Construct, id: string, config: DataGoogleVmwareengineAnnouncementsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig">DataGoogleVmwareengineAnnouncementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig">DataGoogleVmwareengineAnnouncementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineAnnouncements resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleVmwareengineAnnouncements resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineAnnouncements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineAnnouncements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vmwareengine_announcements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineAnnouncements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.announcements">announcements</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList">DataGoogleVmwareengineAnnouncementsAnnouncementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `announcements`<sup>Required</sup> <a name="announcements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.announcements"></a>

```typescript
public readonly announcements: DataGoogleVmwareengineAnnouncementsAnnouncementsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList">DataGoogleVmwareengineAnnouncementsAnnouncementsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineAnnouncementsAnnouncements <a name="DataGoogleVmwareengineAnnouncementsAnnouncements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements.Initializer"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

const dataGoogleVmwareengineAnnouncementsAnnouncements: dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements = { ... }
```


### DataGoogleVmwareengineAnnouncementsConfig <a name="DataGoogleVmwareengineAnnouncementsConfig" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

const dataGoogleVmwareengineAnnouncementsConfig: dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.parent">parent</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.name">name</a></code> | <code>string</code> | The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Required.

The resource name of the location to be queried for announcements. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vmwareengine_announcements#parent DataGoogleVmwareengineAnnouncements#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/vmwareengine_announcements#name DataGoogleVmwareengineAnnouncements#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineAnnouncementsAnnouncementsList <a name="DataGoogleVmwareengineAnnouncementsAnnouncementsList" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

new dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference <a name="DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineAnnouncements } from '@cdktn/provider-google'

new dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements">DataGoogleVmwareengineAnnouncementsAnnouncements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineAnnouncementsAnnouncements;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements">DataGoogleVmwareengineAnnouncementsAnnouncements</a>

---



