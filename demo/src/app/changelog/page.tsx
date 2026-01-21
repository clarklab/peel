import { DocumentCentered } from '@/components/sections/document-centered'

export default function Page() {
  return (
    <>
      <DocumentCentered id="changelog" headline="Changelog" subheadline={<p>Recent updates and improvements to Peel.</p>}>
        <h2>January 21, 2026</h2>
        <h3>⚡ Performance & Reliability</h3>
        <ul>
          <li><strong>Bulletproof Batch Processing</strong> — Switched to Netlify Edge Functions (Deno) which have no timeout waiting for AI responses. Large batches no longer fail at ~30 seconds.</li>
          <li><strong>8x Parallel Jobs</strong> — Increased concurrent processing from 2 to 8 jobs with 100ms stagger delay (was 1-2s). Batches complete significantly faster.</li>
        </ul>

        <h3>✨ Features & Fixes</h3>
        <ul>
          <li><strong>Duplicate Prompt Button</strong> — Added "Duplicate" action to text input cards with drop-in animation.</li>
          <li><strong>UI Fixes</strong> — Fixed "Send as Chat" label overlap, removed icon from "Cancel Job" link.</li>
        </ul>

        <h2>January 13, 2026</h2>
        <h3>📁 Image File Tuning</h3>
        <ul>
          <li><strong>Download Modal</strong> — Export as WEBP, PNG, or JPG with custom filenames. Select images and download as ZIP.</li>
          <li><strong>Large File Handling</strong> — Auto-detect and compress images over 4MB, with option to rename or skip.</li>
          <li><strong>Free Resize</strong> — Resize locally without AI when only changing size/ratio—instant and free.</li>
          <li><strong>Fix</strong> — Preset aspect ratios now work correctly for AI images.</li>
        </ul>

        <h3>🎚️ Output Controls</h3>
        <ul>
          <li><strong>Quality Picker</strong> — Choose output resolution: SD (1K), HD (2K), or 4K. Moved from the generate button to a dedicated inline picker for easier access.</li>
          <li><strong>Aspect Ratio Picker</strong> — Select from preset aspect ratios: Auto (AI decides), Square (1:1), Portrait (4:5), Story (9:16), Wide (16:9), and Photo (3:2).</li>
          <li><strong>Custom Size / Exact Dimensions</strong> — Specify exact pixel dimensions (e.g., 400×600) for your output images. The system automatically selects optimal generation settings and resizes to your exact specifications. Minimum size: 256×256.</li>
          <li><strong>Improved Controls Layout</strong> — Quality and ratio pickers now appear as compact inline controls in the chat footer, keeping the interface clean while making settings more accessible.</li>
          <li><strong>Relocated Cancel Button</strong> — The "Cancel Job" action now appears in the Results column header near the timer for better visibility during processing.</li>
        </ul>

        <h2>January 12, 2026</h2>
        <h3>🗂️ staticDAM Integration</h3>
        <ul>
          <li>Send your new images straight to your team's DAM</li>
          <li>Files instantly backed by GitHub, with a PR</li>
        </ul>

        <h3>🎒 UX Update</h3>
        <ul>
          <li>Image preview modal — Click input thumbnails to see large preview</li>
          <li>Batch toggle — Added info icon/modal to explain it, new segmented control that's more clear</li>
          <li>Generate button label — "Make Single Image" or "Make X Images" based on mode</li>
          <li>Chat input restructure — Generate button moved inside chat container, can instantly generate image without more chatting</li>
          <li>Input button labels — "Upload Images" and "Make Image with Text" (clearer wording)</li>
          <li>Cancel job — Stop processing mid-batch with confirmation modal</li>
          <li>Try Again button label in main column — Clears results but keeps inputs</li>
          <li>Batch toggle visibility — Only shows when 2+ inputs</li>
        </ul>

        <h2>January 11, 2026</h2>
        <h3>🖼️ Lightbox Actions</h3>
        <ul>
          <li>Download, copy, and redo buttons added to image lightbox</li>
          <li>Badge shows new results arriving while lightbox is open</li>
        </ul>

        <h2>January 10, 2026</h2>
        <h3>🎚️ Animated Mode Toggle</h3>
        <ul>
          <li>Smooth sliding pill animation for batch/combine mode switch</li>
          <li>Info modal explains the difference between modes</li>
        </ul>

        <h2>January 9, 2026</h2>
        <h3>📚 Preset Management</h3>
        <ul>
          <li>Horizontal scrolling preset row</li>
          <li>Per-preset visibility toggle</li>
          <li>Drag-and-drop reordering saved to database</li>
        </ul>

        <h2>January 8, 2026</h2>
        <h3>🔐 Google Sign-In</h3>
        <ul>
          <li>Google OAuth option added to auth modal</li>
          <li>Alternative to magic link email sign-in</li>
        </ul>

        <h2>January 7, 2026</h2>
        <h3>📊 Admin Activity Log</h3>
        <ul>
          <li>Unified admin dashboard for auth events, job logs, and token purchases</li>
          <li>Filter by time range and activity type</li>
        </ul>

        <h2>January 6, 2026</h2>
        <h3>🔗 Edit with Peel Links</h3>
        <ul>
          <li>External sites can link with image URL parameter</li>
          <li>Auto-loads image for editing</li>
        </ul>
      </DocumentCentered>
    </>
  )
}
